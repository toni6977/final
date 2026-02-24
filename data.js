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
    "question": "Вероятность попадания хотя бы одного в цель при одном залпе из двух орудий равна 0,98. Найти вероятность поражения цели при одном выстреле первого орудия, если известно, что для второго орудия эта вероятность равна 0,9",
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
    "question": "Как определяется наивероятнейшее число наступивших событий k₀ в схеме Бернулли?",
    "optionA": "np - p < k₀ < np + q",
    "optionB": "np + q < k₀ < np + p",
    "optionC": "np - q < k₀ < np + p",
    "optionD": "np - q < k₀ < np - p",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 4,
    "testId": 4,
    "question": "Если случайная величина X принимает значения -1, 1 с вероятностями 0,6; 0,4 и случайная величина Y принимает значения -1, +1 с вероятностями 0,3 и 0,7, то найти среднюю квадратическую отклонение случайной величины X+Y? (X и Y - независимые)",
    "optionA": "√1,84",
    "optionB": "√0,2",
    "optionC": "√1,2",
    "optionD": "√1,8",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 5,
    "testId": 4,
    "question": "Какое свойство справедливо для функции плотности случайной величины ξ?",
    "optionA": "f_ξ(x) ≥ 0",
    "optionB": "f_ξ(x) ≥ 0,5",
    "optionC": "f_ξ(x) > 0",
    "optionD": "f_ξ(x) ≤ 0",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 6,
    "testId": 4,
    "question": "Найти дисперсию непрерывной случайной величины, равномерно распределенной в интервале [-4;8]?",
    "optionA": "11",
    "optionB": "13",
    "optionC": "12",
    "optionD": "10",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 7,
    "testId": 4,
    "question": "Из 30 стрелков 12 попадают в цель с вероятностью 0,6, 8 - с вероятностью 0,5 и 10 - с вероятностью 0,7. Если случайно выбранный стрелок попал в цель, найти вероятность, что он из первой группы?",
    "optionA": "36/91",
    "optionB": "20/91",
    "optionC": "35/91",
    "optionD": "91/150",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 8,
    "testId": 4,
    "question": "Если A=(-∞; 3) и B=[-1;+∞), то найти AΔB (симметрическую разность).",
    "optionA": "(-∞; -1)",
    "optionB": "(-∞; -1) ∪ [3; +∞)",
    "optionC": "[3; +∞)",
    "optionD": "[-1; 3)",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 9,
    "testId": 4,
    "question": "Вероятность одного попадания в цель при одном залпе из двух орудий равна 0,38. Найти вероятность поражения цели при одном выстреле первого орудия, если для второго орудия эта вероятность равна 0,7",
    "optionA": "0,5",
    "optionB": "0,8",
    "optionC": "0,6",
    "optionD": "0,9",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 10,
    "testId": 4,
    "question": "Если -2<x<2, -2<y<2, найти P(x²+y²<1)?",
    "optionA": "π/16",
    "optionB": "π/4",
    "optionC": "1",
    "optionD": "16π",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 11,
    "testId": 4,
    "question": "В формулах Бернулли и Пуассона как определяется вероятность, что событие А произойдёт больше чем k раз?",
    "optionA": "P_n(0) + P_n(1) + ... + P_n(k)",
    "optionB": "P_n(0) + P_n(1) + ... + P_n(k-1)",
    "optionC": "P_n(k) + P_n(k+1) + ... + P_n(n)",
    "optionD": "P_n(k+1) + P_n(k+2) + ... + P_n(n)",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 12,
    "testId": 4,
    "question": "Если Dξ = 4, Dη = 3, найти D((4ξ-5η)/10 + 2022)?",
    "optionA": "-0,21",
    "optionB": "1,42",
    "optionC": "1,39",
    "optionD": "-0,12",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 13,
    "testId": 4,
    "question": "Математическое ожидание непрерывной случайной величины ξ",
    "optionA": "∫_{-∞}^{+∞} (x-a)·f_ξ(x)dx",
    "optionB": "∫_{a}^{b} x·f_ξ(x)dx",
    "optionC": "∫_{-∞}^{x} x·f_ξ(x)dx",
    "optionD": "∫_{-∞}^{+∞} x·f_ξ(x)dx",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 14,
    "testId": 4,
    "question": "Непрерывная случайная величина X задана функцией плотности f_ξ(x) = (1/√π)e^(-x²). Найти математическое ожидание и дисперсию X.",
    "optionA": "MX=-1; DX=1/2",
    "optionB": "MX=0; DX=0,5",
    "optionC": "MX=+1; DX=2",
    "optionD": "MX=-0,5; DX=1/2",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 15,
    "testId": 4,
    "question": "Как определяется выборочное дисперсия в ранжированных рядах?",
    "optionA": "S̄² = (x₁²+...+xₙ²)/(n-1) - ((x₁+...+xₙ)/(n-1))²",
    "optionB": "S̄² = (x₁²+...+xₙ²)/n - ((x₁+...+xₙ)/n)²",
    "optionC": "S̄² = (x₁²+...+xₙ²)/n",
    "optionD": "S̄² = (x₁+x₂+...+xₙ)/n",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 16,
    "testId": 4,
    "question": "В первой и третьей группах одинаковое число студентов, а во второй – в 1,5 раза меньше. Количество отличников: 9% в первой, 4% во второй и 6% в третьей. Случайно вызванный студент оказался отличником. Найти вероятность, что он из третьей группы?",
    "optionA": "8/53",
    "optionB": "18/53",
    "optionC": "27/53",
    "optionD": "15/57",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 17,
    "testId": 4,
    "question": "Эксперимент состоит из подбрасывания двух монет и одной игральной кости. Из скольких элементов состоит пространство элементарных событий?",
    "optionA": "38",
    "optionB": "72",
    "optionC": "36",
    "optionD": "24",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 18,
    "testId": 4,
    "question": "Подбрасывается три монеты. Чему равна вероятность события, что выпадет не менее два герба?",
    "optionA": "7/8",
    "optionB": "5/8",
    "optionC": "1/2",
    "optionD": "3/8",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 19,
    "testId": 4,
    "question": "В квадрат со стороной 1 брошена точка. Найти вероятность, что расстояние от точки до центра квадрата не превышает 0,1",
    "optionA": "π/10",
    "optionB": "π/100",
    "optionC": "100π",
    "optionD": "1",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 20,
    "testId": 4,
    "question": "Стрелок выполнил 100 выстрелов. Найти вероятность 75 попаданий, если вероятность попадания при каждом выстреле равна 0,8 (φ(1,25) = 0,1826)",
    "optionA": "0,046",
    "optionB": "0,183",
    "optionC": "0,461",
    "optionD": "0,056",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 21,
    "testId": 4,
    "question": "Если X принимает значения -1, 1 с вероятностями 0,6; 0,4 и Y принимает значения -1, +1 с вероятностями 0,3 и 0,7, найти дисперсию X+Y? (X и Y - независимые)",
    "optionA": "1,2",
    "optionB": "0,2",
    "optionC": "1,8",
    "optionD": "1,84",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 22,
    "testId": 4,
    "question": "Для непрерывной случайной величины ξ: P(a < ξ < b) = P(a ≤ ξ < b) = P(a < ξ ≤ b) = P(a ≤ ξ ≤ b). Как определяются эти вероятности?",
    "optionA": "F_ξ(b) · F_ξ(a)",
    "optionB": "F_ξ(a) - F_ξ(b)",
    "optionC": "F_ξ(b) - F_ξ(a)",
    "optionD": "F_ξ(b) + F_ξ(a)",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 23,
    "testId": 4,
    "question": "Случайная величина ξ имеет нормальное распределение с плотностью f_ξ(x)=A·exp{-x²-6x+3}. Найти параметр A?",
    "optionA": "(√π·e^(-12))^(-1)",
    "optionB": "(√π·e^4)^(-1)",
    "optionC": "(√π)^(-1)·e^12",
    "optionD": "(√π)^(-1)·e^12",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 24,
    "testId": 4,
    "question": "Двумерная случайная величина (ξ; η) равномерно распределена внутри трапеции с вершинами A(0,0), B(1,3), C(3,3), D(4,0). Найти плотность распределения?",
    "optionA": "9",
    "optionB": "2/3",
    "optionC": "1/9",
    "optionD": "3/2",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 25,
    "testId": 4,
    "question": "∀ε>0 lim(n→∞) P(|T_n - θ| < ε) = 1. Тогда статистическая оценка T_n называется для неизвестного параметра ……",
    "optionA": "Смещённой оценкой",
    "optionB": "Состоятельной оценкой",
    "optionC": "Эффективной оценкой",
    "optionD": "Несмещённой оценкой",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 26,
    "testId": 4,
    "question": "Из 30 стрелков 12 попадают с вероятностью 0,6, 8 - с 0,5 и 10 - с 0,7. Если выбранный стрелок попал, найти вероятность, что он из второй группы?",
    "optionA": "20/91",
    "optionB": "91/150",
    "optionC": "35/91",
    "optionD": "36/91",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 27,
    "testId": 4,
    "question": "На полке 6 книг, из которых две в красном переплете. Сколько способов расставить книги так, чтобы две красные стояли рядом?",
    "optionA": "2!·5!",
    "optionB": "5!",
    "optionC": "2!·4!",
    "optionD": "6!",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 28,
    "testId": 4,
    "question": "В магазин вошли три покупателя. Вероятность покупки у каждого 0,3. Найти вероятность, что хотя бы один купит товар?",
    "optionA": "0,343",
    "optionB": "0,576",
    "optionC": "0,451",
    "optionD": "0,657",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 29,
    "testId": 4,
    "question": "В квадрат со стороной 1 брошена точка. Найти вероятность, что расстояние от точки до угла квадрата не превышает 0,1",
    "optionA": "1",
    "optionB": "π/100",
    "optionC": "π/10",
    "optionD": "100π",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 30,
    "testId": 4,
    "question": "Если X принимает значения -1, 0, 1 с вероятностями 0,3; 0,5; 0,2 и Y принимает -1, +1 с 0,4 и 0,6, найти распределение X·Y? (X и Y - независимые)",
    "optionA": "P(-1)=0,24; P(0)=0,5; P(+1)=0,26",
    "optionB": "P(-1)=0,26; P(0)=0,5; P(+1)=0,24",
    "optionC": "P(-1)=0,26; P(0)=0,24; P(+1)=0,5",
    "optionD": "P(-1)=0,5; P(0)=0,26; P(+1)=0,24",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 31,
    "testId": 4,
    "question": "Непрерывная случайная величина ξ задана в [0;1] с плотностью f(x) = c·x², вне интервала f(x)=0. Найти среднее квадратическое отклонение?",
    "optionA": "√(5/80)",
    "optionB": "√(3/80)",
    "optionC": "√(3/8)",
    "optionD": "√(5/8)",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 32,
    "testId": 4,
    "question": "Найти дисперсию непрерывной случайной величины, равномерно распределенной в [-2;4]?",
    "optionA": "0",
    "optionB": "3",
    "optionC": "2",
    "optionD": "1",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 33,
    "testId": 4,
    "question": "Как определяется Мода в ранжированных рядах?",
    "optionA": "Равен значению самой большой варианты",
    "optionB": "Формула для чётного/нечётного n",
    "optionC": "(x_min + x_max)/2",
    "optionD": "Мода не определяется",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 34,
    "testId": 4,
    "question": "Получена выборка: 4, 6, 11, 4, 6, 5, 4, 6, 4, 10. Найти выборочную дисперсию?",
    "optionA": "5,8",
    "optionB": "6",
    "optionC": "5,4",
    "optionD": "6,2",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 35,
    "testId": 4,
    "question": "Для математического ожидания a нормального распределения найти доверительный интервал при S=0,8, γ=0,95, x̄=20,2, n=16, t=2,13",
    "optionA": "(19,774; 20,626)",
    "optionB": "(19,316; 31,258)",
    "optionC": "(15,896; 23,587)",
    "optionD": "(18,214; 21,314)",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 36,
    "testId": 4,
    "question": "Имеются три одинаковые урны. В первой 4 белых и 7 чёрных, во второй – только белые, в третьей – только чёрные. Наудачу выбрана урна и извлечён шар. Какова вероятность, что шар чёрный?",
    "optionA": "6/11",
    "optionB": "5/11",
    "optionC": "1/3",
    "optionD": "2/3",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 37,
    "testId": 4,
    "question": "Ихтиёрий A hodisaning ehtimolligi uchun qanday xossa o'rinli? (Какое свойство вероятности события A выполняется?)",
    "optionA": "В интервале [-1,1]",
    "optionB": "Всегда равна 1",
    "optionC": "В интервале [0,1]",
    "optionD": "Всегда равна 0",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 38,
    "testId": 4,
    "question": "Из 36 игральных карт выбрали 6 карт. Найти вероятность, что 2 из них тузы?",
    "optionA": "C₄²·C₃₂⁴ / C₃₆⁶",
    "optionB": "C₄²·C₃₄⁴ / C₃₆⁶",
    "optionC": "C₃₆⁶ / (C₄²·C₃₂⁴)",
    "optionD": "2/6",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 39,
    "testId": 4,
    "question": "На единичный отрезок бросается точка. Найти вероятность, что длина малого отрезка не превосходит 0,1",
    "optionA": "0,1",
    "optionB": "1/2",
    "optionC": "0,2",
    "optionD": "1/3",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 40,
    "testId": 4,
    "question": "В формулах Бернулли и Пуассона: как определяется вероятность, что событие А произойдёт менее k раз?",
    "optionA": "P_n(0) + ... + P_n(k-1)",
    "optionB": "P_n(k) + ... + P_n(n)",
    "optionC": "P_n(k+1) + ... + P_n(n)",
    "optionD": "P_n(0) + ... + P_n(k)",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 41,
    "testId": 4,
    "question": "Если Dξ = 4, Dη = 3, найти D((2ξ-5η)/10 - 2022)?",
    "optionA": "0,91",
    "optionB": "2022,91",
    "optionC": "-2021,09",
    "optionD": "-0,59",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 42,
    "testId": 4,
    "question": "Непрерывная случайная величина ξ в [0;1] с f(x)=c·x², вне интервала f(x)=0. Найти медиану?",
    "optionA": "³√(2/5)",
    "optionB": "³√(1/3)",
    "optionC": "³√(3/5)",
    "optionD": "³√(1/2)",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 43,
    "testId": 4,
    "question": "Если случайная величина задана плотностью f(x) = 0,2e^(-0,2x) при x≥0, 0 при x<0. Найти дисперсию?",
    "optionA": "0,04",
    "optionB": "25",
    "optionC": "5",
    "optionD": "0,2",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 44,
    "testId": 4,
    "question": "Каждодневный товарооборот пяти точек: 10, 12, 13, 14, x₅. Если средний товарооборот равен 13, найти выборочную дисперсию S²?",
    "optionA": "5,4",
    "optionB": "2,5",
    "optionC": "1,8",
    "optionD": "4",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 45,
    "testId": 4,
    "question": "Найти смещенную оценку для среднеквадратического отклонения генеральной совокупности",
    "optionA": "√5,16",
    "optionB": "√6",
    "optionC": "√3",
    "optionD": "2",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 46,
    "testId": 4,
    "question": "Доверительный интервал для дисперсии σ² нормального распределения?",
    "optionA": "((n-1)S²/u₁ ≤ σ² ≤ (n-1)S²/u₂)",
    "optionB": "((n-1)S/u₁ ≤ σ² ≤ (n-1)S/u₂)",
    "optionC": "(nS²/u₁ ≤ σ² ≤ nS²/u₂)",
    "optionD": "(nS/u₁ ≤ σ² ≤ nS/u₂)",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 47,
    "testId": 4,
    "question": "В первой урне 3 белых и 4 чёрных, во второй 5 белых и 8 чёрных. Из каждой по одному шару в третью урну. Найти вероятность, что из третьей извлечённый шар чёрный?",
    "optionA": "37/91",
    "optionB": "56/91",
    "optionC": "35/91",
    "optionD": "54/91",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 48,
    "testId": 4,
    "question": "Сколькими способами разместить 4 туристов в 5 однокомнатных гостиницах?",
    "optionA": "5",
    "optionB": "5!",
    "optionC": "20",
    "optionD": "4!",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 49,
    "testId": 4,
    "question": "В семье 5 детей. Вероятности рождения мальчика и девочки одинаковы. Найти вероятность не менее 2 мальчиков?",
    "optionA": "5/16",
    "optionB": "9/16",
    "optionC": "13/16",
    "optionD": "15/16",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 50,
    "testId": 4,
    "question": "Какое свойство справедливо для функции распределения F_ξ(x) = P(ξ < x)?",
    "optionA": "∀x₁<x₂ ⇒ F_ξ(x₁) ≤ F_ξ(x₂)",
    "optionB": "∀x₁<x₂ ⇒ F_ξ(x₁) > F_ξ(x₂)",
    "optionC": "∀x₁<x₂ ⇒ F_ξ(x₁) < F_ξ(x₂)",
    "optionD": "∀x₁<x₂ ⇒ F_ξ(x₁) ≥ F_ξ(x₂)",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 51,
    "testId": 4,
    "question": "Найти математическое ожидание непрерывной случайной величины, равномерно распределенной в [a;b]?",
    "optionA": "(a-b)/2",
    "optionB": "(a+b)/2",
    "optionC": "a/b",
    "optionD": "(a+b)/2",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 52,
    "testId": 4,
    "question": "Найти исправленную дисперсию для выборки: 11, 6, 9, 12, 7",
    "optionA": "5,5",
    "optionB": "5",
    "optionC": "4,5",
    "optionD": "6,5",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 53,
    "testId": 4,
    "question": "Получена выборка: 4, 6, 11, 4, 6, 5, 4, 6, 4, 10. Найти выборочную среднюю?",
    "optionA": "7",
    "optionB": "4",
    "optionC": "5",
    "optionD": "6",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 54,
    "testId": 4,
    "question": "По предмету 30 экзаменационных билетов. Студент выучил 20. Каким выгоднее зайти на экзамен?",
    "optionA": "Вторым",
    "optionB": "Без разницы",
    "optionC": "Последним",
    "optionD": "Нет правильного ответа",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 55,
    "testId": 4,
    "question": "В магазин вошли три покупателя. Вероятность покупки 0,3. Найти вероятность, что два из них совершат покупки?",
    "optionA": "0,189",
    "optionB": "0,215",
    "optionC": "0,176",
    "optionD": "0,347",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 56,
    "testId": 4,
    "question": "В семье 5 детей. Найти вероятность не менее 2 и не более 3 мальчиков?",
    "optionA": "5/8",
    "optionB": "7/8",
    "optionC": "3/8",
    "optionD": "3/4",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 57,
    "testId": 4,
    "question": "Если P(X=-2)=0,5; P(X=-1)=p₂; P(X=2)=p₃ и MX=-0,9. Найти p₂ и p₃?",
    "optionA": "p₂=0,3; p₃=0,2",
    "optionB": "p₂=0,4; p₃=0,1",
    "optionC": "p₂=0,05; p₃=0,45",
    "optionD": "p₂=0,1; p₃=0,4",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 58,
    "testId": 4,
    "question": "Если случайная величина ξ задана функцией распределения F_ξ(x), найти математическое ожидание?",
    "optionA": "11/17",
    "optionB": "17/11",
    "optionC": "19/12",
    "optionD": "12/19",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 59,
    "testId": 4,
    "question": "Найти функцию распределения равномерно распределенной случайной величины в [-1;3]",
    "optionA": "F(x) = 0 (x<-1); (x+1)/4 (-1≤x<3); 2 (x≥3)",
    "optionB": "F(x) = 0 (x<-1); (x-1)/4 (-1≤x<3); 1 (x≥3)",
    "optionC": "F(x) = 0 (x<-1); x/4 (-1≤x<3); 1 (x≥3)",
    "optionD": "F(x) = 0 (x<-1); (x+1)/4 (-1≤x<3); 1 (x≥3)",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 60,
    "testId": 4,
    "question": "Найти M(X·Y)",
    "optionA": "-0,2",
    "optionB": "0,3",
    "optionC": "0,8",
    "optionD": "4,8",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 61,
    "testId": 4,
    "question": "Найти выборочную среднюю для выборки: 3, -1, 4, 1, -2",
    "optionA": "3",
    "optionB": "-2",
    "optionC": "1",
    "optionD": "-1",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 62,
    "testId": 4,
    "question": "При условии, что X имеет Пуассоновское распределение, найти оценку параметра λ методом моментов?",
    "optionA": "9/5",
    "optionB": "5/9",
    "optionC": "2/3",
    "optionD": "10/17",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 63,
    "testId": 4,
    "question": "Найти коэффициент ковариации между X и Y",
    "optionA": "0,05",
    "optionB": "1,9",
    "optionC": "0,1",
    "optionD": "3,48",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 64,
    "testId": 4,
    "question": "В контейнере 6 белых и 6 чёрных шаров. Один шар поместили, затем один извлекли. Если извлечённый белый, найти вероятность, что вставленный был белым?",
    "optionA": "1/2",
    "optionB": "7/13",
    "optionC": "5/13",
    "optionD": "6/13",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 65,
    "testId": 4,
    "question": "Вероятность попадания хотя бы одного при залпе из двух орудий равна 0,98. Найти вероятность первого орудия, если для второго она 0,8",
    "optionA": "0,9",
    "optionB": "0,6",
    "optionC": "0,8",
    "optionD": "0,7",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 66,
    "testId": 4,
    "question": "Если 0<x<1, 0<y<1, найти P(y-x>1/2)?",
    "optionA": "7/8",
    "optionB": "1/4",
    "optionC": "1/2",
    "optionD": "1/8",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 67,
    "testId": 4,
    "question": "Если Dξ = 4, Dη = 3, найти D((2ξ-5η)/10 - 2022)?",
    "optionA": "0,91",
    "optionB": "2022,91",
    "optionC": "-2021,09",
    "optionD": "-0,59",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 68,
    "testId": 4,
    "question": "Непрерывная случайная величина X нормально распределена с a=3 и σ=1. Какая плотность?",
    "optionA": "f(x) = (1/√(2π))·e^(-(x-3)²/2)",
    "optionB": "f(x) = (1/(3√(2π)))·e^(-x/6)",
    "optionC": "f(x) = (1/√2)·e^(-(x-3)/2)",
    "optionD": "f(x) = (1/√(2π))·e^(-(x-1)/6)",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 69,
    "testId": 4,
    "question": "Двумерная случайная величина (ξ; η) равномерно распределена в треугольнике A(0,0), B(0,1), C(1,0). Найти плотность?",
    "optionA": "0,5",
    "optionB": "+1",
    "optionC": "1",
    "optionD": "2",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 70,
    "testId": 4,
    "question": "Получена выборка: 7, 5, 3, 3, 5, 2, 3, 5, 2, 5. Найти выборочное среднее квадратическое отклонение?",
    "optionA": "√(12/5)",
    "optionB": "√(22/5)",
    "optionC": "√(42/5)",
    "optionD": "√(32/5)",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 71,
    "testId": 4,
    "question": "Найти Моду для интервального вариационного ряда",
    "optionA": "22",
    "optionB": "21",
    "optionC": "21,5",
    "optionD": "23",
    "correctAnswer": "a",
    "points": 2
  },
  {
    "id": 72,
    "testId": 4,
    "question": "Для математического ожидания a при σ=5, γ=0,95, x̄=14, n=25, t=1,96 найти доверительный интервал",
    "optionA": "(12,89; 17,75)",
    "optionB": "(19,21; 25,46)",
    "optionC": "(12,04; 15,96)",
    "optionD": "(14,74; 18,37)",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 73,
    "testId": 4,
    "question": "Методом наименьших квадратов найти уравнение линейной регрессии y = a·x + b",
    "optionA": "y = 3,7468x - 1,9565",
    "optionB": "y = 4,0588x + 3,1765",
    "optionC": "y = -1,0556x + 9,7778",
    "optionD": "y = 2,0769x - 3,3846",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 74,
    "testId": 4,
    "question": "Тест на болезнь с вероятностью 0,95 не ошибается. Болезнь у 1% населения. Человек получил положительный результат. С какой вероятностью он болен?",
    "optionA": "0,85",
    "optionB": "0,93",
    "optionC": "0,18",
    "optionD": "0,16",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 75,
    "testId": 4,
    "question": "Заданы множества A = (-∞; 3) и B = [-1; +∞). Найти A ∩ B?",
    "optionA": "[3; +∞)",
    "optionB": "(-∞; -1) ∪ [3; +∞)",
    "optionC": "(-∞; -1)",
    "optionD": "[-1; 3)",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 76,
    "testId": 4,
    "question": "Подбрасывается 3 монеты. Найти вероятность не менее 1 герба?",
    "optionA": "1/2",
    "optionB": "7/8",
    "optionC": "5/8",
    "optionD": "1/4",
    "correctAnswer": "b",
    "points": 2
  },
  {
    "id": 77,
    "testId": 4,
    "question": "Если -4 ≤ x ≤ 4; -2 ≤ y ≤ 8, найти P(y < |x-1|)?",
    "optionA": "47/80",
    "optionB": "9/20",
    "optionC": "11/20",
    "optionD": "33/80",
    "correctAnswer": "d",
    "points": 2
  },
  {
    "id": 78,
    "testId": 4,
    "question": "В формулах Бернулли и Пуассона: как определяется вероятность, что событие А произойдёт хотя бы один раз?",
    "optionA": "P_n(0) + ... + P_n(k-1)",
    "optionB": "P_n(k+1) + ... + P_n(n)",
    "optionC": "1 - P_n(0)",
    "optionD": "P_n(0) + ... + P_n(k)",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 79,
    "testId": 4,
    "question": "Если X принимает -1, 0, 1 с 0,3; 0,5; 0,2 и Y принимает -1, +1 с 0,4 и 0,6, найти M(X·Y)? (X и Y - независимые)",
    "optionA": "0,2",
    "optionB": "-0,02",
    "optionC": "0,02",
    "optionD": "0,03",
    "correctAnswer": "c",
    "points": 2
  },
  {
    "id": 80,
    "testId": 4,
    "question": "Непрерывная случайная величина ξ в [0;2] с f(x)=c·x², вне интервала f(x)=0. Найти среднее квадратическое отклонение?",
    "optionA": "√(3/20)",
    "optionB": "√(7/20)",
    "optionC": "√(3/5)",
    "optionD": "√(2/5)",
    "correctAnswer": "a",
    "points": 2
  }
],
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
        
