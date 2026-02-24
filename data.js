// База данных приложения
const DB = {
    tests: [
         {
            id: 4,
            title: "Вероятность и статистика",
            description: "Тест на знание Вероятности и статистики",
            duration: 30,
            questionCount: 15
        },
        {
            id: 1,
            title: "Основы SQL и реляционных баз данных",
            description: "Тест на знание основ SQL, нормализации, ключей и базовых операций с данными",
            duration: 30,
            questionCount: 15
        },
        {
            id: 2,
            title: "Продвинутый SQL и оптимизация запросов",
            description: "Тест на знание сложных запросов, подзапросов, индексов и оптимизации",
            duration: 45,
            questionCount: 20
        },
        {
            id: 3,
            title: "NoSQL базы данных",
            description: "Тест на знание MongoDB, Redis, Cassandra и других NoSQL решений",
            duration: 30,
            questionCount: 15
        }
    ],
    
    
    questions: [
        // Тест 1: Основы SQL
        { 
            id: 1, 
            testId: 1, 
            // Вместо текста можно указать ссылку на изображение:
            // question: "images/q1.png",
            // isImage: true,
            question: "Что такое первичный ключ (Primary Key) в реляционной базе данных?", 
            optionA: "Поле, которое может содержать дублирующиеся значения", 
            optionB: "Уникальный идентификатор записи в таблице", 
            optionC: "Ссылка на другую таблицу", 
            optionD: "Индекс для ускорения поиска", 
            correctAnswer: "b", 
            points: 2 
        },
        { 
            id: 2, 
            testId: 1, 
            question: "Какая команда SQL используется для выборки данных из таблицы?", 
            optionA: "INSERT", 
            optionB: "UPDATE", 
            optionC: "SELECT", 
            optionD: "DELETE", 
            correctAnswer: "c", 
            points: 2 
        },
        { 
            id: 3, 
            testId: 1, 
            question: "Что означает термин 'нормализация' в контексте баз данных?", 
            optionA: "Увеличение скорости запросов", 
            optionB: "Процесс организации данных для уменьшения избыточности", 
            optionC: "Создание резервных копий", 
            optionD: "Шифрование данных", 
            correctAnswer: "b", 
            points: 2 
        },
        { 
            id: 4, 
            testId: 1, 
            question: "Какой оператор используется для объединения результатов двух SELECT запросов?", 
            optionA: "JOIN", 
            optionB: "MERGE", 
            optionC: "UNION", 
            optionD: "CONCAT", 
            correctAnswer: "c", 
            points: 2 
        },
        { 
            id: 5, 
            testId: 1, 
            question: "Что делает оператор WHERE в SQL запросе?", 
            optionA: "Сортирует результаты", 
            optionB: "Фильтрует строки по условию", 
            optionC: "Группирует данные", 
            optionD: "Объединяет таблицы", 
            correctAnswer: "b", 
            points: 2 
        },
        { 
            id: 6, 
            testId: 1, 
            question: "Какая нормальная форма требует, чтобы все неключевые атрибуты зависели от всего первичного ключа?", 
            optionA: "Первая нормальная форма (1NF)", 
            optionB: "Вторая нормальная форма (2NF)", 
            optionC: "Третья нормальная форма (3NF)", 
            optionD: "Нормальная форма Бойса-Кодда (BCNF)", 
            correctAnswer: "b", 
            points: 3 
        },
        { 
            id: 7, 
            testId: 1, 
            question: "Что такое внешний ключ (Foreign Key)?", 
            optionA: "Ключ, который уникально идентифицирует запись", 
            optionB: "Поле, которое ссылается на первичный ключ другой таблицы", 
            optionC: "Индекс для ускорения запросов", 
            optionD: "Ключ для шифрования данных", 
            correctAnswer: "b", 
            points: 2 
        },
        { 
            id: 8, 
            testId: 1, 
            question: "Какая команда используется для добавления новой записи в таблицу?", 
            optionA: "ADD", 
            optionB: "INSERT", 
            optionC: "CREATE", 
            optionD: "PUT", 
            correctAnswer: "b", 
            points: 2 
        },
        { 
            id: 9, 
            testId: 1, 
            question: "Что делает оператор GROUP BY?", 
            optionA: "Сортирует результаты", 
            optionB: "Фильтрует данные", 
            optionC: "Группирует строки с одинаковыми значениями", 
            optionD: "Объединяет таблицы", 
            correctAnswer: "c", 
            points: 2 
        },
        { 
            id: 10, 
            testId: 1, 
            question: "Какой тип JOIN возвращает все записи из обеих таблиц?", 
            optionA: "INNER JOIN", 
            optionB: "LEFT JOIN", 
            optionC: "RIGHT JOIN", 
            optionD: "FULL OUTER JOIN", 
            correctAnswer: "d", 
            points: 3 
        },
        { 
            id: 11, 
            testId: 1, 
            question: "Что такое транзакция в базе данных?", 
            optionA: "Одна SQL команда", 
            optionB: "Последовательность операций, выполняемых как единое целое", 
            optionC: "Резервная копия данных", 
            optionD: "Индекс таблицы", 
            correctAnswer: "b", 
            points: 3 
        },
        { 
            id: 12, 
            testId: 1, 
            question: "Какое свойство ACID гарантирует, что транзакция либо полностью выполняется, либо не выполняется вообще?", 
            optionA: "Atomicity (Атомарность)", 
            optionB: "Consistency (Согласованность)", 
            optionC: "Isolation (Изолированность)", 
            optionD: "Durability (Долговечность)", 
            correctAnswer: "a", 
            points: 3 
        },
        { 
            id: 13, 
            testId: 1, 
            question: "Какая команда используется для удаления таблицы?", 
            optionA: "DELETE TABLE", 
            optionB: "REMOVE TABLE", 
            optionC: "DROP TABLE", 
            optionD: "DESTROY TABLE", 
            correctAnswer: "c", 
            points: 2 
        },
        { 
            id: 14, 
            testId: 1, 
            question: "Что делает оператор ORDER BY?", 
            optionA: "Группирует данные", 
            optionB: "Фильтрует строки", 
            optionC: "Сортирует результаты запроса", 
            optionD: "Объединяет таблицы", 
            correctAnswer: "c", 
            points: 2 
        },
        { 
            id: 15, 
            testId: 1, 
            question: "Какая функция используется для подсчета количества строк?", 
            optionA: "SUM()", 
            optionB: "COUNT()", 
            optionC: "AVG()", 
            optionD: "MAX()", 
            correctAnswer: "b", 
            points: 2 
        },
        
        // Тест 2: Продвинутый SQL (сокращено для примера)
        { id: 16, testId: 2, question: "Что такое индекс в базе данных?", optionA: "Резервная копия таблицы", optionB: "Структура данных для ускорения поиска", optionC: "Тип данных", optionD: "Связь между таблицами", correctAnswer: "b", points: 2 },
        { id: 17, testId: 2, question: "Какой тип индекса автоматически создается для первичного ключа?", optionA: "Вторичный индекс", optionB: "Составной индекс", optionC: "Уникальный индекс", optionD: "Полнотекстовый индекс", correctAnswer: "c", points: 2 },
        { id: 18, testId: 2, question: "Что такое подзапрос (subquery)?", optionA: "Запрос к внешней базе данных", optionB: "Запрос, вложенный в другой запрос", optionC: "Запрос без условий WHERE", optionD: "Запрос с ошибкой", correctAnswer: "b", points: 2 },
        { id: 19, testId: 2, question: "Какой оператор используется для создания представления (VIEW)?", optionA: "CREATE TABLE", optionB: "CREATE VIEW", optionC: "MAKE VIEW", optionD: "NEW VIEW", correctAnswer: "b", points: 2 },
        { id: 20, testId: 2, question: "Что такое денормализация?", optionA: "Удаление всех индексов", optionB: "Намеренное добавление избыточности для повышения производительности", optionC: "Удаление данных из таблицы", optionD: "Шифрование базы данных", correctAnswer: "b", points: 3 },
        { id: 21, testId: 2, question: "Какой уровень изоляции транзакций самый строгий?", optionA: "READ UNCOMMITTED", optionB: "READ COMMITTED", optionC: "REPEATABLE READ", optionD: "SERIALIZABLE", correctAnswer: "d", points: 3 },
        { id: 22, testId: 2, question: "Что такое хранимая процедура?", optionA: "Временная таблица", optionB: "Набор SQL команд, сохраненный на сервере", optionC: "Тип индекса", optionD: "Резервная копия", correctAnswer: "b", points: 3 },
        { id: 23, testId: 2, question: "Какой оператор используется для изменения структуры существующей таблицы?", optionA: "MODIFY TABLE", optionB: "CHANGE TABLE", optionC: "ALTER TABLE", optionD: "UPDATE TABLE", correctAnswer: "c", points: 2 },
        { id: 24, testId: 2, question: "Что такое триггер в базе данных?", optionA: "Индекс для ускорения запросов", optionB: "Автоматически выполняемая процедура при определенном событии", optionC: "Тип данных", optionD: "Связь между таблицами", correctAnswer: "b", points: 3 },
        { id: 25, testId: 2, question: "Какая функция возвращает текущую дату и время в SQL?", optionA: "DATE()", optionB: "TIME()", optionC: "NOW()", optionD: "CURRENT()", correctAnswer: "c", points: 2 },
        { id: 26, testId: 2, question: "Что такое курсор в SQL?", optionA: "Тип индекса", optionB: "Указатель на набор результатов запроса", optionC: "Тип данных", optionD: "Связь между таблицами", correctAnswer: "b", points: 3 },
        { id: 27, testId: 2, question: "Какой оператор используется для объединения строк из разных таблиц на основе условия?", optionA: "UNION", optionB: "JOIN", optionC: "MERGE", optionD: "COMBINE", correctAnswer: "b", points: 2 },
        { id: 28, testId: 2, question: "Что такое EXPLAIN в SQL?", optionA: "Команда для удаления данных", optionB: "Команда для анализа плана выполнения запроса", optionC: "Команда для создания таблицы", optionD: "Команда для резервного копирования", correctAnswer: "b", points: 3 },
        { id: 29, testId: 2, question: "Какое ключевое слово используется для предотвращения дублирования результатов?", optionA: "UNIQUE", optionB: "DISTINCT", optionC: "DIFFERENT", optionD: "SINGLE", correctAnswer: "b", points: 2 },
        { id: 30, testId: 2, question: "Что такое партиционирование таблиц?", optionA: "Удаление данных", optionB: "Разделение большой таблицы на меньшие части", optionC: "Создание индекса", optionD: "Резервное копирование", correctAnswer: "b", points: 4 },
        { id: 31, testId: 2, question: "Какая команда откатывает транзакцию?", optionA: "UNDO", optionB: "ROLLBACK", optionC: "CANCEL", optionD: "REVERT", correctAnswer: "b", points: 2 },
        { id: 32, testId: 2, question: "Что такое CASCADE при удалении записи с внешним ключом?", optionA: "Удаление блокируется", optionB: "Автоматическое удаление связанных записей", optionC: "Создание резервной копии", optionD: "Игнорирование внешнего ключа", correctAnswer: "b", points: 3 },
        { id: 33, testId: 2, question: "Какой тип JOIN возвращает только совпадающие записи из обеих таблиц?", optionA: "LEFT JOIN", optionB: "RIGHT JOIN", optionC: "INNER JOIN", optionD: "FULL JOIN", correctAnswer: "c", points: 2 },
        { id: 34, testId: 2, question: "Что такое NULL в SQL?", optionA: "Ноль", optionB: "Пустая строка", optionC: "Отсутствие значения", optionD: "Ложь", correctAnswer: "c", points: 2 },
        { id: 35, testId: 2, question: "Какая функция используется для округления числа?", optionA: "CEIL()", optionB: "FLOOR()", optionC: "ROUND()", optionD: "TRUNC()", correctAnswer: "c", points: 2 },
        
        // Тест 3: NoSQL
        { id: 36, testId: 3, question: "Что такое MongoDB?", optionA: "Реляционная база данных", optionB: "Документоориентированная NoSQL база данных", optionC: "Язык программирования", optionD: "Инструмент для создания графиков", correctAnswer: "b", points: 2 },
        { id: 37, testId: 3, question: "В каком формате хранятся документы в MongoDB?", optionA: "XML", optionB: "JSON/BSON", optionC: "CSV", optionD: "YAML", correctAnswer: "b", points: 2 },
        { id: 38, testId: 3, question: "Что такое Redis?", optionA: "Графовая база данных", optionB: "База данных ключ-значение в памяти", optionC: "Документная база данных", optionD: "Реляционная база данных", correctAnswer: "b", points: 2 },
        { id: 39, testId: 3, question: "Какая модель данных используется в Cassandra?", optionA: "Документная", optionB: "Графовая", optionC: "Колоночная (Wide-column)", optionD: "Ключ-значение", correctAnswer: "c", points: 3 },
        { id: 40, testId: 3, question: "Что означает CAP теорема?", optionA: "Consistency, Availability, Partition tolerance", optionB: "Create, Alter, Process", optionC: "Cache, Access, Performance", optionD: "Copy, Archive, Protect", correctAnswer: "a", points: 3 },
        { id: 41, testId: 3, question: "Какая NoSQL база данных является графовой?", optionA: "MongoDB", optionB: "Redis", optionC: "Neo4j", optionD: "Cassandra", correctAnswer: "c", points: 2 },
        { id: 42, testId: 3, question: "Что такое коллекция в MongoDB?", optionA: "Аналог строки в реляционной БД", optionB: "Аналог таблицы в реляционной БД", optionC: "Тип индекса", optionD: "Резервная копия", correctAnswer: "b", points: 2 },
        { id: 43, testId: 3, question: "Какое преимущество NoSQL баз данных перед реляционными?", optionA: "ACID транзакции", optionB: "Горизонтальное масштабирование", optionC: "SQL запросы", optionD: "Строгая схема данных", correctAnswer: "b", points: 3 },
        { id: 44, testId: 3, question: "Что такое шардирование (sharding)?", optionA: "Репликация данных", optionB: "Горизонтальное разделение данных по серверам", optionC: "Создание индексов", optionD: "Резервное копирование", correctAnswer: "b", points: 3 },
        { id: 45, testId: 3, question: "Какой тип данных НЕ поддерживается в Redis?", optionA: "Строки", optionB: "Списки", optionC: "Множества", optionD: "Таблицы", correctAnswer: "d", points: 2 },
        { id: 46, testId: 3, question: "Что такое eventual consistency?", optionA: "Немедленная согласованность данных", optionB: "Согласованность данных через некоторое время", optionC: "Отсутствие согласованности", optionD: "Полная согласованность", correctAnswer: "b", points: 3 },
        { id: 47, testId: 3, question: "Какая команда используется для вставки документа в MongoDB?", optionA: "add()", optionB: "insert()", optionC: "create()", optionD: "put()", correctAnswer: "b", points: 2 },
        { id: 48, testId: 3, question: "Что такое replica set в MongoDB?", optionA: "Группа коллекций", optionB: "Группа серверов для репликации данных", optionC: "Тип индекса", optionD: "Резервная копия", correctAnswer: "b", points: 3 },
        { id: 49, testId: 3, question: "Какой порт по умолчанию использует MongoDB?", optionA: "3306", optionB: "5432", optionC: "27017", optionD: "6379", correctAnswer: "c", points: 2 },
        { id: 50, testId: 3, question: "Что такое aggregation pipeline в MongoDB?", optionA: "Инструмент для резервного копирования", optionB: "Фреймворк для обработки данных через последовательность операций", optionC: "Тип индекса", optionD: "Метод репликации", correctAnswer: "b", points: 4 }
        [
    {
        "id": 1,
        "testId": 4,
        "question": "Эксперимент состоит из подбрасывания одной монеты до появления герба. Найти вероятность того, что эксперимент закончится в нечётном шаге?",
        "optionA": "3/4",
        "optionB": "2/3",
        "optionC": "1/3",
        "optionD": "1/2",
        "correctAnswer": "b",
        "points": 2
    },
    {
        "id": 2,
        "testId": 4,
        "question": "Вероятность попадания хотя бы одного в цель при одном залпе из двух орудий равна 0,98. Найти вероятность поражения цели при одном выстреле первого орудия, если известно, что для второго орудия эта вероятность равна 0,9.",
        "optionA": "0,95",
        "optionB": "0,6",
        "optionC": "0,8",
        "optionD": "0,7",
        "correctAnswer": "c",
        "points": 2
    },
    {
        "id": 3,
        "testId": 4,
        "question": "В квадрат со стороной 1 брошена 1 точка. Найти вероятность того, что расстояние от точки до стороны квадрата не превышает 0,1.",
        "optionA": "0,36",
        "optionB": "1",
        "optionC": "0,4",
        "optionD": "0,04",
        "correctAnswer": "a",
        "points": 2
    },
    {
        "id": 4,
        "testId": 4,
        "question": "Как определяется наивероятнейшее число наступивших событий k₀ в схеме Бернулли?",
        "optionA": "np - p < k₀ < np + q",
        "optionB": "np + q < k₀ < np + p",
        "optionC": "np - q < k₀ < np + p",
        "optionD": "np - q < k₀ < np - p",
        "correctAnswer": "c",
        "points": 2
    },
    {
        "id": 5,
        "testId": 4,
        "question": "X принимает значения -1, 1 с вероятностями 0.6 и 0.4, Y принимает -1 и +1 с вероятностями 0.3 и 0.7 (независимы). Найти среднее квадратическое отклонение X+Y.",
        "optionA": "√1.84",
        "optionB": "√0.2",
        "optionC": "√1.2",
        "optionD": "√1.8",
        "correctAnswer": "d",
        "points": 2
    },
    {
        "id": 6,
        "testId": 4,
        "question": "Какое свойство справедливо для функции плотности случайной величины ξ?",
        "optionA": "f_ξ(x) ≥ 0",
        "optionB": "f_ξ(x) ≥ 0.5",
        "optionC": "f_ξ(x) > 0",
        "optionD": "f_ξ(x) ≤ 0",
        "correctAnswer": "a",
        "points": 2
    },
    {
        "id": 7,
        "testId": 4,
        "question": "Найти дисперсию непрерывной случайной величины, равномерно распределённой на интервале [-4, 8].",
        "optionA": "11",
        "optionB": "13",
        "optionC": "12",
        "optionD": "10",
        "correctAnswer": "c",
        "points": 2
    },
    {
        "id": 8,
        "testId": 4,
        "question": "Найти M(X·Y) по таблице совместного распределения (X=6 Y=0:0.4; X=6 Y=7:0.1; X=8 Y=0:0.1; X=8 Y=7:0.4).",
        "optionA": "14",
        "optionB": "0.6",
        "optionC": "26.6",
        "optionD": "2.1",
        "correctAnswer": "c",
        "points": 2
    },
    {
        "id": 9,
        "testId": 4,
        "question": "Для выборки 8, 5, 6, 9 найти среднее квадратическое отклонение.",
        "optionA": "70.5",
        "optionB": "60.5",
        "optionC": "50.5",
        "optionD": "80.5",
        "correctAnswer": "b",
        "points": 2
    },
    {
        "id": 10,
        "testId": 4,
        "question": "Найти медиану по таблице частот (2:8, 6:16, 9:14, 13:7, 16:5).",
        "optionA": "9",
        "optionB": "14",
        "optionC": "16",
        "optionD": null,
        "correctAnswer": "a",
        "points": 2
    },
    {
        "id": 11,
        "testId": 4,
        "question": "Найти моду интервального ряда (0;2):6, (2;4):7, (4;6):5, (6;8):2.",
        "optionA": "12/17",
        "optionB": "3/5",
        "optionC": "9/5",
        "optionD": "8/3",
        "correctAnswer": "d",
        "points": 2
    },
    {
        "id": 12,
        "testId": 4,
        "question": "X имеет показательное распределение. Найти оценку параметра λ методом моментов.",
        "optionA": "5/8",
        "optionB": "17/10",
        "optionC": "5/9",
        "optionD": "10/17",
        "correctAnswer": "d",
        "points": 2
    },
    {
        "id": 13,
        "testId": 4,
        "question": "Методом наименьших квадратов найти уравнение регрессии y = a·x + b по точкам (4,6), (4,5), (5,4), (6,4), (7,3).",
        "optionA": "y = -0.7941·x + 8.5294",
        "optionB": "y = -0.7941·x + 8.5294 (повтор, но другой вариант)",
        "optionC": "y = 1.0588·x + 3.1765",
        "optionD": "y = -1.0556·x + 9.7778",
        "correctAnswer": "a",
        "points": 2
    },
    {
        "id": 14,
        "testId": 4,
        "question": "Из 30 стрелков: 12 с p=0.6, 8 с p=0.5, 10 с p=0.7. Стрелок попал. Вероятность, что он из первой группы?",
        "optionA": "36/91",
        "optionB": "20/91",
        "optionC": "35/91",
        "optionD": "91/150",
        "correctAnswer": "a",
        "points": 2
    },
    {
        "id": 15,
        "testId": 4,
        "question": "Если A = (-∞; 3) и B = [-1; +∞), найти A Δ B.",
        "optionA": "(-∞; -1)",
        "optionB": "(-∞; -1) ∪ [3; +∞)",
        "optionC": "[3; +∞)",
        "optionD": "[-1; 3)",
        "correctAnswer": "b",
        "points": 2
    },
    {
        "id": 16,
        "testId": 4,
        "question": "Вероятность ровно одного попадания при залпе из двух орудий = 0.38, p₂ = 0.7. Найти p₁.",
        "optionA": "0.5",
        "optionB": "0.8",
        "optionC": "0.6",
        "optionD": "0.9",
        "correctAnswer": "b",
        "points": 2
    },
    {
        "id": 17,
        "testId": 4,
        "question": "Если -2 ≤ x ≤ 2, -2 ≤ y ≤ 2, найти P(x² + y² < 1).",
        "optionA": "π/16",
        "optionB": "π/4",
        "optionC": "1",
        "optionD": "16π",
        "correctAnswer": "a",
        "points": 2
    },
    {
        "id": 18,
        "testId": 4,
        "question": "В формулах Бернулли и Пуассона как определяется вероятность, что событие A произойдёт больше чем k раз?",
        "optionA": "P(0) + … + P(k)",
        "optionB": "P(0) + … + P(k-1)",
        "optionC": "P(k) + … + P(n)",
        "optionD": "P(k+1) + … + P(n)",
        "correctAnswer": "d",
        "points": 2
    },
    {
        "id": 19,
        "testId": 4,
        "question": "Если D \bar{x} = 4, D \bar{y} = 3, найти D((4\bar{x} - 5\bar{y})/10 + 2022).",
        "optionA": "-0.21",
        "optionB": "1.42",
        "optionC": "1.39",
        "optionD": "-0.12",
        "correctAnswer": "c",
        "points": 2
    },
    {
        "id": 20,
        "testId": 4,
        "question": "Математическое ожидание непрерывной случайной величины ξ",
        "optionA": "∫ (x-a) f(x) dx",
        "optionB": "∫_a^b x f(x) dx",
        "optionC": "∫ x f(x) dx (неверные пределы)",
        "optionD": "∫_{-∞}^{+∞} x f_ξ(x) dx",
        "correctAnswer": "d",
        "points": 2
    },
    {
        "id": 21,
        "testId": 4,
        "question": "Непрерывная случайная величина X с плотностью f(x) = (1/√π) e^{-x²}. Найти MX и DX.",
        "optionA": "MX = -1; DX = 1/2",
        "optionB": "MX = 0; DX = 0.5",
        "optionC": "MX = +1; DX = 2",
        "optionD": "MX = -0.5; DX = 1/2",
        "correctAnswer": "b",
        "points": 2
    },
    {
        "id": 22,
        "testId": 4,
        "question": "Найти M(X·Y) по таблице (X=4 Y=0:0.4; X=4 Y=5:0.1; X=6 Y=0:0.1; X=6 Y=5:0.4).",
        "optionA": "14",
        "optionB": "1.5",
        "optionC": "0.6",
        "optionD": "-0.2",
        "correctAnswer": "a",
        "points": 2
    },
    {
        "id": 23,
        "testId": 4,
        "question": "Как определяется выборочная дисперсия в ранжированных рядах?",
        "optionA": "... / (n-1) - ...",
        "optionB": "(∑x_i² / n) - (∑x_i / n)²",
        "optionC": "∑x_i² / n",
        "optionD": "∑x_i / n",
        "correctAnswer": "b",
        "points": 2
    },
    {
        "id": 24,
        "testId": 4,
        "question": "Найти ... (моду или медиану) по таблице 5:10, 9:7, 12:9, 16:6, 19:18 (n=50).",
        "optionA": "18",
        "optionB": "50",
        "optionC": "5",
        "optionD": "19",
        "correctAnswer": "d",
        "points": 2
    },
    {
        "id": 25,
        "testId": 4,
        "question": "Приняв середины интервалов, найти выборочное среднее ([2;5):18, [5;8):12, [8;11):14, [11;14):6, n=50).",
        "optionA": "4.76",
        "optionB": "7.32",
        "optionC": "5.74",
        "optionD": "6.98",
        "correctAnswer": "d",
        "points": 2
    },
    {
        "id": 26,
        "testId": 4,
        "question": "X ~ равномерное [a;b]. Выборка -8, -1, 2, 3, 4. Оценки a, b методом моментов.",
        "optionA": "[-√57.6; +√57.6]",
        "optionB": "[-√27.6; +√27.6]",
        "optionC": "[-8; 4]",
        "optionD": "[-√56.4; +√56.4]",
        "correctAnswer": "d",
        "points": 2
    },
    {
        "id": 27,
        "testId": 4,
        "question": "Найти коэффициент ковариации между X и Y (X: -2,-1,0,1,2; Y: 5,4,1,6,8).",
        "optionA": "-1.6",
        "optionB": "0.16",
        "optionC": "1.6",
        "optionD": "0.5",
        "correctAnswer": "c",
        "points": 2
    },
    {
        "id": 28,
        "testId": 4,
        "question": "Три группы студентов, отличники 9%, 4%, 6%. Вызван отличник — вероятность из третьей группы.",
        "optionA": "8/53",
        "optionB": "18/53",
        "optionC": "27/53",
        "optionD": "15/57",
        "correctAnswer": "b",
        "points": 2
    },
    {
        "id": 29,
        "testId": 4,
        "question": "Эксперимент — две монеты и один игральный кубик. Сколько элементарных событий?",
        "optionA": "38",
        "optionB": "72",
        "optionC": "36",
        "optionD": "24",
        "correctAnswer": "d",
        "points": 2
    }
]
};

/* 
ИНСТРУКЦИЯ ПО ДОБАВЛЕНИЮ ВОПРОСОВ С ИЗОБРАЖЕНИЯМИ:

1. Положите изображение в папку images/ (например: images/question1.png)

2. В массиве questions добавьте вопрос с флагом isImage:

{
    id: 51,
    testId: 1,
    question: "images/question1.png",  // Путь к изображению
    isImage: true,                      // Флаг что это изображение!
    optionA: "Вариант A",
    optionB: "Вариант B", 
    optionC: "Вариант C",
    optionD: "Вариант D",
    correctAnswer: "b",
    points: 2
}

3. Варианты ответов (optionA, optionB и т.д.) могут быть как текстом, так и изображениями:

{
    id: 52,
    testId: 1,
    question: "Выберите правильную схему базы данных:",
    isImage: false,
    optionA: "images/schema1.png",  // Картинка как вариант ответа
    optionB: "images/schema2.png",
    optionC: "images/schema3.png",
    optionD: "images/schema4.png",
    optionIsImage: true,             // Флаг что варианты - изображения!
    correctAnswer: "b",
    points: 3
}

4. Можно комбинировать - вопрос картинкой, ответы текстом или наоборот!
*/
