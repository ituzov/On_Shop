const block = document.querySelector('#rec577912829');
const viewerCountElement = block.querySelector('[field="tn_text_1681478858275"]');
const startDate = '2023-04-15'; // Укажите здесь дату начала

// Время начала и конца интервалов
const firstIntervalStart = '11:50:00';
const firstIntervalEnd = '11:55:00';

const secondIntervalStart = '11:55:00';
const secondIntervalEnd = '12:00:00';

const thirdIntervalStart = '12:00:00';
const thirdIntervalEnd = '12:05:00';

const fourthIntervalStart = '12:05:00';
const fourthIntervalEnd = '12:10:00';

const fifthIntervalStart = '12:10:00';
const fifthIntervalEnd = '12:15:00';

const sixthIntervalStart = '12:15:00';
const sixthIntervalEnd = '13:25:00';

const seventhIntervalStart = '13:25:00';
const seventhIntervalEnd = '13:55:00';

const schedule = [
    // Первый интервал: от 0 до 100, шаг 3 секунды
    { start: `${startDate}T${firstIntervalStart}`, end: `${startDate}T${firstIntervalEnd}`, min: 0, max: 100, step: 3, interval: 3000 },
    // Второй интервал: от 100 до 200, шаг 3 секунды
    { start: `${startDate}T${secondIntervalStart}`, end: `${startDate}T${secondIntervalEnd}`, min: 100, max: 200, step: 3, interval: 3000 },
    // Третий интервал: от 200 до 300, шаг 3 секунды
    { start: `${startDate}T${thirdIntervalStart}`, end: `${startDate}T${thirdIntervalEnd}`, min: 200, max: 300, step: 3, interval: 3000 },
    // Четвертый интервал: от 300 до 400, шаг 3 секунды
    { start: `${startDate}T${fourthIntervalStart}`, end: `${startDate}T${fourthIntervalEnd}`, min: 300, max: 400, step: 3, interval: 3000 },
    // Пятый интервал: от 400 до 500, шаг 3 секунды
    { start: `${startDate}T${fifthIntervalStart}`, end: `${startDate}T${fifthIntervalEnd}`, min: 400, max: 500, step: 3, interval: 3000 },
    // Шестой интервал: случайное движение между 480 и 500, каждые 3 минуты
    { start: `${startDate}T${sixthIntervalStart}`, end: `${startDate}T${sixthIntervalEnd}`, min: 480, max: 500, step: 0, interval: 1 * 60 * 1000 },
    // Седьмой интервал: от 500 до 0, шаг 3 секунды
    { start: `${startDate}T${seventhIntervalStart}`, end: `${startDate}T${seventhIntervalEnd}`, min: 500, max: 0, step: 26, interval: 3000 }
];

updateViewerCount();

function updateViewerCount() {
    const now = new Date();
    let activeSchedule;

    for (const item of schedule) {
        const start = new Date(item.start);
        const end = new Date(item.end);

        if (now >= start && now <= end) {
            activeSchedule = item;
            break;
        }
    }

    if (activeSchedule) {
        const { min, max, step, interval } = activeSchedule;

        if (viewerCountElement.textContent === "Зрителей: 0") {
            viewerCountElement.textContent = `Зрителей: ${min}`;
        } else {
            if (step === 0) {
                const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;
                viewerCountElement.textContent = `Зрителей: ${randomCount}`;
            } else {
                const currentCount = parseInt(viewerCountElement.textContent.split(': ')[1]);
                const newCount = (max > min) ? Math.min(currentCount + step, max) : Math.max(currentCount - step, max);
                viewerCountElement.textContent = `Зрителей: ${newCount}`;
            }
        }
    }

    setTimeout(updateViewerCount, activeSchedule ? activeSchedule.interval : 1000);
}