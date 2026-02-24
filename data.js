// База данных приложения
const DB = {
    tests: [
         {
            id: 4,
            title: "Вероятность и статистика",
            description: "Тест на знание Вероятности и статистики",
            duration: 30,
            questionCount: 90
        },
    ],
    
    
    questions: [
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
        
