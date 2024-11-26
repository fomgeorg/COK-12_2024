window.dataLoaded = false;
let title_of_eom = themeOfDEC;
const data = {
    "index_1":{
        "subtitle": "Рассмотрите пример определения равнодействующей двух плоских сонаправленных параллельных сил.",
        "step_of_popup": "Рассмотрите пример определения равнодействующей двух плоских сонаправленных параллельных сил.",
        "paragraph_1":[
            {"image": true, "image_path": "./content/page_content/img1_1.png","img_sign": "Рисунок 1", "left_img": false, "no_sgn": false},
            {"text": `
                Определить модуль и положение равнодействующей двух параллельных сил <span class="math_equation">$ \\mathbf{F}_1 $</span> и <span class="math_equation">$ \\mathbf{F}_2 $</span>, изображенных на рисунке 1, если расстояние между их линиями действия <span class="math_equation">$ 0{,}8 \\, \\text{м} $</span>. Величина сил: <span class="math_equation">$ F_1 = 170 \\, \\text{Н} $</span>, <span class="math_equation">$ F_2 = 60 \\, \\text{Н} $</span>. `},
            //{"text2": "<b class='blue_header big_rectangle'>I. Общие положения</b>"},
            {"text": "<b class='blue_header'>Решение</b>"},
            {"text": `Определяем модуль равнодействующей <span class="math_equation">$ \\vec{R} $</span>. Так как силы направлены в одну сторону, то величина равнодействующей <span class="math_equation">$R$</span> будет равна сумме значений сил <span class="math_equation">$F_1$</span> и <span class="math_equation">$F_2$</span>.<br> <span class="math_equation">$R = F_1 + F_2 = 170 + 60 = 230  \\text{Н}$</span>. Направление равнодействующей <span class="math_equation">$ \\vec{R} $</span> совпадает с направлением сил (рисунок 2).`}
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/page_content/img1_2.png","img_sign": "Рисунок 2", "no_sgn": false, "left_img": true},
            {"text": `
                Определяем положение равнодействующей <span class="math_equation">$ \\vec{R} $</span>.
                На основании свойства ряда равных отношений можно записать
                <span class="math_equation">$ \\frac{F_1}{CB} = \\frac{F_2}{AC} = \\frac{R}{AB} $</span>. `},
            //{"text2": "<b class='blue_header big_rectangle'>I. Общие положения</b>"},
            {"text": `Определяем положение равнодействующей <span class="math_equation">$ \\vec{R} $</span>. <br>
                На основании свойства ряда равных отношений можно записать
                <span class="math_equation">$ \\frac{F_1}{CB} = \\frac{F_2}{AC} = \\frac{R}{AB} $</span>.
                Рассмотрим соотношение
                <span class="math_equation">$ \\frac{F_1}{CB} = \\frac{R}{AB} $</span>. <br>
                Из этого соотношения
                <span class="math_equation">$ CB = \\frac{F_1 \\cdot AB}{R} = \\frac{170 \\cdot 0.8}{230} = 0.59 , \\text{м} $</span>. <br>
                Модуль равнодействующей <span class="math_equation">$ R = 230 , \\text{Н} $</span> и ее линия действия будет проходить через точку <span class="math_equation">$ C $</span>, расположенную на расстоянии <span class="math_equation">$ 0.59 , \\text{м} $</span> от линии действия силы <span class="math_equation">$ \\vec{F_2} $</span>.` }
        ]
    },
    "index_2":{
        "subtitle": "Рассмотрите пример определения равнодействующей двух плоских противоположно направленных параллельных сил.",
        "step_of_popup": "Рассмотрите пример определения равнодействующей двух плоских противоположно направленных параллельных сил.",
        "paragraph_1":[
            {"image": true, "image_path": "./content/page_content/img2_1.png","img_sign": "Рисунок 3", "no_sgn": false},
            {"text": `
                Определить модуль и положение равнодействующей двух параллельных сил <span class="math_equation">$ \\vec{F_1} $</span> и <span class="math_equation">$ \\vec{F_2} $</span>, изображенных на рисунке 3, если расстояние между их линиями действия 0,8 метра. Величина сил: <span class="math_equation">$ F_1 = 170 , \\text{Н} $</span>, <span class="math_equation">$ F_2 = 60 , \\text{Н} $</span>. `},
            //{"text2": "<b class='blue_header big_rectangle'>I. Общие положения</b>"},
            {"text": "<b class='blue_header'>Решение</b>"},
            {"text": `Определяем модуль равнодействующей <span class="math_equation">$ \\vec{R} $</span>. Так как силы направлены в разные стороны, то величина равнодействующей <span      class="math_equation">$ R $</span> будет равна разности значений сил <span class="math_equation">$ F_1 $</span> и <span class="math_equation">$ F_2 $</span>.<br>
                <span class="math_equation">$ R = F_1 - F_2 = 170 - 60 = 110 , \\text{Н} $</span>.
                 Направление равнодействующей <span class="math_equation">$ \\vec{R} $</span> совпадает с направлением большей силы, и ее линия действия проходит за большей из двух сил (рисунок 4).`}
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/page_content/img2_2.png","img_sign": "Рисунок 4", "left_img": false, "no_sgn": false, "left_img": true},
            //{"text2": "<b class='blue_header big_rectangle'>I. Общие положения</b>"},
            {"text": `
                Определяем положение равнодействующей <span class="math_equation">$ \\vec{R} $</span>.
                На основании свойства ряда равных отношений можно записать
                <span class="math_equation">$ \\frac{F_1}{CB} = \\frac{F_2}{AC} = \\frac{R}{AB} $</span>.
                Рассмотрим соотношение
                <span class="math_equation">$ \\frac{F_1}{CB} = \\frac{R}{AB} $</span>.
                Из этого соотношения
                <span class="math_equation">$ CB = \\frac{F_1 \\cdot AB}{R} = \\frac{170 \\cdot 0.8}{110} = 1.59 , \\text{м} $</span>.
                Модуль равнодействующей <span class="math_equation">$ R = 110 , \\text{Н} $</span> и ее линия действия будет проходить через точку <span class="math_equation">$ C $</span>, расположенную на расстоянии <span class="math_equation">$ 1.59 , \\text{м} $</span> от линии действия силы <span class="math_equation">$ \\vec{F_2} $</span>.
                `}
        ]
    },
    "index_3":{
        "subtitle": "Решить задачу",
        "step_of_popup": "Решить задачу",
        "test":[
            {"type": 2},
            {"description": `На каком расстоянии расположена линия действия равнодействующей <span class="math_equation">$ \\vec{R} $</span> двух параллельных сил <span class="math_equation">$ \\vec{F_1} $</span> и <span class="math_equation">$ \\vec{F_2} $</span> от линии действия силы <span class="math_equation">$ \\vec{F_2} $</span>, если расстояние между силами 10 метров. Величина сил: <span class="math_equation">$ F_1 = 60 , \\text{Н} $</span>, <span class="math_equation">$ F_2 = 40 , \\text{Н} $</span>. Схема сил изображена на рисунке.<br> Ответ дать в целых числах.`},
            {"test_with_text": "{=6}"},
            {"image": true, "image_path": "./content/tests_content/03_01.png"}
        ],
    },
    "index_4":{
        "subtitle": "Решить задачу",
        "step_of_popup": "Решить задачу",
        "test":[
            {"type": 2},
            {"description": `На каком расстоянии расположена линия действия равнодействующей <span class="math_equation">$ \\vec{R} $</span> двух параллельных сил <span class="math_equation">$ \\vec{F_1} $</span> и <span class="math_equation">$ \\vec{F_2} $</span> от линии действия силы <span class="math_equation">$ \\vec{F_2} $</span>, если расстояние между силами 12 метров. Величина сил: <span class="math_equation">$ F_1 = 40 , \\text{Н} $</span>, <span class="math_equation">$ F_2 = 120 , \\text{Н} $</span>. Схема сил изображена на рисунке. <br> Ответ дать в целых числах.`},
            {"test_with_text": "{=2}"},
            {"image": true, "image_path": "./content/tests_content/04_01.png"}
        ],
    },
    "index_5":{
        "subtitle": "Изучите зависимость значений координат центра тяжести плоских сечений от их положения в системе координат.",
        "step_of_popup": "Изучите зависимость значений координат центра тяжести плоских сечений от их положения в системе координат.",
        "paragraph_1": [
            {"text": "<b>В зависимости от расположения сечения в системе координат меняются координаты центра тяжести плоских сечений<b>"},
            {"text": "<b class='blue_header'>Например:<b>"},
            {"text": `<div class='two_img_custom'>
                <div>
                   <img src='./content/page_content/img5_1.png'>
                    <p> Если в треугольнике AОB провести оси координат Ox и Oy вдоль катетов OB и OA, то координаты центра тяжести С будут равны <br>
                    <span class="math_equation">$x_C = \\frac{18}{3} = 6;$</span> <span class="math_equation">$y_C = \\frac{12}{3} = 4.$</span> </p>
                </div>
               <div>
                   <img src='./content/page_content/img5_2.png'>
                   <p> Если в треугольнике AОB провести ось координат Oy через центр пересечения медиан, а ось Ox как показано на рисунке, то координаты центра тяжести С будут равны <br>
                    <span class="math_equation">$x_C = 0;$</span> <span class="math_equation">$y_C = 3 + \\frac{12}{3} = 7 $.</span> </p>
                </div>
                </div>`},
                {"text": `<div class='two_img_custom'>
                    <div>
                       <img src='./content/page_content/img5_3.png'>
                       <p> Если в прямоугольнике ABDE провести оси координат Ox и Oy через точку пересечения диагоналей, то координаты центра тяжести С будут равны <br>
                        <span class="math_equation">$x_C = 0;$</span> <span class="math_equation">$y_C = 0.$</span></p>
                    </div>
                   <div>
                       <img src='./content/page_content/img5_4.png'>
                       <p> Если в прямоугольнике ABDE провести оси координат Ox и Oy как показано на рисунке, то координаты центра тяжести С будут равны <br>
                        <span class="math_equation">$x_C = - \\frac{8}{2} = -4 $ ;</span> <span class="math_equation">$y_C = 0$.</span> </p>
                    </div>
                    </div>`},
                    {"text": "При выборе осей координат для определения координат центра тяжести сечения необходимо стремиться к тому, чтобы они совпадали с осями симметрии сечения, так как в этом случае нахождение координат значительно упрощается. Оси, которые проходят через центр тяжести сечения называются <b>центральными.<b>"},
        ]
    },
    "index_6":{
        "subtitle": "Решить задачу",
        "step_of_popup": "Решить задачу",
        "test":[
            {"type": 2},
            {"description": `Определить координату x<sub>c</sub> центра тяжести плоского сечения, показанного на рисунке. Ответ дать в целых числах. `},
            {"test_with_text": "{=12}"},
            {"image": true, "image_path": "./content/tests_content/06_01.png"}
        ],
    },
    "index_7":{
        "subtitle": "Изучите статический момент плоского сечения.",
        "step_of_popup": "Изучите статический момент плоского сечения.",
        "paragraph_1": [
            {"text": ` Координаты центра тяжести плоских однородных сечений, определяются по формулам: <br><br> <p><span class="math_equation"> $x_C = \\frac{\\sum A_k \\cdot x_k}{\\sum A_k};$ </span> <span class="math_equation"> $y_C = \\frac{\\sum A_k \\cdot y_k}{\\sum A_k}.$ </span></p> `},
            {"text": "<b>В числителях этих формулах стоит сумма произведений площадей сечений  на расстояние их центров тяжестей до соответствующих осей. Эта сумма называется статический момент площади сечения.</b>"}
        ],
        "paragraph_2": [
            {"image": true, "image_path": "./content/page_content/img7_1.png","img_sign": " ", "left_img": true, "no_sgn": true},
            {"text": `
                <p>Т.е. <span class="math_equation">$\\Sigma A_k \\cdot x_k$</span> – это статический момент сечения относительно оси Oy, так как координаты <span class="math_equation">$ x_k $</span> определяют расстояние до оси Oy. Обозначается он <span class="math_equation">$ S_y $</span>.<br>
                <span class="math_equation">$ S_y = \\Sigma A_k \\cdot x_k $</span>.</p>
                <p><span class="math_equation">$\\Sigma A_k \\cdot y_k$</span> – это статический момент сечения относительно оси Ox, так как координаты <span class="math_equation">$ x_k $</span> определяют расстояние до оси Ox. Обозначается он <span class="math_equation">$ S_x $</span>.<br>
                <span class="math_equation">$ S_x = \\Sigma A_k \\cdot y_k $</span>.</p>
                <p>Статический момент плоской фигуры относительно оси Ox равен произведению площади фигуры на координату <span class="math_equation">$ y_C $</span> ее центра тяжести, а статический момент относительно оси Oy – произведению площади фигуры на координату <span class="math_equation">$ x_C $</span> ее центра тяжести. <br>
                <span class="math_equation">$ S_x = A \\cdot y_C $</span>; <span class="math_equation"> $ S_y = A \\cdot x_C $.</span> </p> 
                `},
        ],
        "paragraph_3": [
            {"text": ` 
                <p>Размерность статического момента плоского сечения – м<sup>3</sup>, см<sup>3</sup> или мм<sup>3</sup>. 
                Таким образом, координаты центра тяжести плоского сечения можно записать в следующем виде: <br>
                <span class="math_equation"> $x_C = \\frac{S_y}{A};$ </span> <span class="math_equation"> $y_C = \\frac{S_x}{A}$ </span>.<br>
                Статический момент сечения относительно любой оси, проходящей через центр тяжести этого сечения равен нулю.</p>
                `}
        ],
        "paragraph_4": [
            {"image": true, "image_path": "./content/page_content/img7_2.png","img_sign": " ", "left_img": true, "no_sgn": true},
            {"text": `
                <p>Для сечения, показанного на рисунке, определим статический момент сечения относительно осей Ox и Oy. <br> 
                Определяем площадь треугольника AOB. <p/> <br>
                <p><span class="math_equation"> $A = \\frac{1}{2} \\cdot ab = \\frac{1}{2} \\cdot 18 \\cdot 12 = 108 \\, \\text{см}^2$ </span>. <br> 
                Координаты центра тяжести плоского сечения С равны  <br>
                <span class="math_equation"> $x_C = 0;$ </span>  <span class="math_equation"> $y_C = 3 + \\frac{12}{3} = 7$ </span>.  
                Определяем статический момент сечения относительно оси Ox.  <br>
                <span class="math_equation"> $S_x = A \\cdot y_C = 108 \\cdot 7 = 756 \\, \\text{см}^3$ </span>.  
                Статический момент сечения относительно оси Oy будет равен нулю, так как <span class="math_equation"> $x_C = 0$ </span>. <br> 
                <span class="math_equation"> $S_y = A \\cdot x_C = 108 \\cdot 0 = 0$ </span>.</p>
                <p><b class='blue_header'>Статические моменты сечений – это важнейшие геометрические характеристики сечений</b></p>
                `},       
        ],
        "paragraph_5": [
            {"text": ` 
                <p>Они имеют широкое практическое применение в различных областях инженерии и механики. Статические моменты сечений используются для определения прочности и жесткости конструкций, тем самым помогают инженерам оценить, как балки и другие элементы будут реагировать на нагрузки. <br>
                Статические моменты помогают в расчетах касательных напряжений в конструкциях, что важно для выбора материалов и их форм, помогают в разработке архитектурных форм, обеспечивая не только эстетические качества, но и структурную целостность зданий.</p> 
                `}
        ],
    },
    "index_8":{
        "subtitle": "Для каких сечений, показанных на рисунке статический момент относительно оси Oy равен нулю?  Выберите все правильные ответы.",
        "step_of_popup": "Для каких сечений, показанных на рисунке статический момент относительно оси Oy равен нулю?",
        "test":[
            {"type": 1},
            {"answers": [
                "<img class='answer_image' src='./content/tests_content/08_01.png' alt=' '>",
                "<img class='answer_image' src='./content/tests_content/08_02.png' alt=' '>",
                "<img class='answer_image' src='./content/tests_content/08_03.png' alt=' '>",
                "<img class='answer_image' src='./content/tests_content/08_04.png' alt=' '>",
            ]},
            {"correct_answer": [0,1]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ]
    },
    "index_9":{
        "subtitle": "Рассмотрите определение координат центра тяжести сложных плоских сечений.",
        "step_of_popup": "Рассмотрите определение координат центра тяжести сложных плоских сечений.",
        "paragraph_1": [
            {"image": true, "image_path": "./content/page_content/img9_1.png","img_sign": " ", "no_sgn":true}
        ],
        "paragraph_2": [
            {"text": "<p><b class='blue_header'>Решение.</b></p>"}
        ],
        "paragraph_3": [
            {"image": true, "image_path": "./content/page_content/img9_2.png", "img_sign": " ", "left_img": false, "no_sgn": false},
            {"text": `<p>Применим к данному сечению метод разбиения, т.е. разобьем сечение на простые фигуры, у которых известны положения центров тяжести и площади.</p>
               <p> <b>Фигура 1</b> – прямоугольник 160×150 мм. Он закрашен голубым цветом.<br>
                <b>Фигура 2</b> – полукруг радиусом 40 мм. Он закрашен желтым цветом.<br>
                <b>Фигура 3</b> – прямоугольный треугольник с катетами 150 мм и 30 мм. Он заштрихован. Так треугольник вырезается из прямоугольника, то его площадь будет отрицательной.<br>
                </p> 
                <p>Определяем площади и координаты центров тяжестей простых фигур.</p>
                <p><b>Фигура 1</b> – прямоугольник 160×150 мм.<br>
                Площадь <span class="math_equation">$A_1 = 160 \\cdot 150 = 24000 \\, \\text{мм}^2$</span>.<br>
                Координаты центра тяжести прямоугольника C<sub>1</sub><br>
                <span class="math_equation">$x_{C1} = \\frac{160}{2} = 80 \\, \\text{мм}$</span>; <span class="math_equation">$y_{C1} = \\frac{150}{2} = 75 \\, \\text{мм}$</span>.</p>

                <p><b>Фигура 2</b> – полукруг радиусом 40 мм.<br>
                Площадь <span class="math_equation">$A_2 = \\frac{1}{2} \\cdot \\pi \\cdot R^2 = \\frac{1}{2} \\cdot 3.14 \\cdot 40^2 = 2512 \\, \\text{мм}^2$</span>.<br>
                Координаты центра тяжести полукруга C<sub>2</sub><br>
                <span class="math_equation">$x_{C2} = 160 + \\frac{4R}{3\\pi} = 160 + \\frac{4 \\cdot 40}{3 \\cdot 3.14} = 160 + 17 = 177 \\, \\text{мм}$</span>; <span class="math_equation">$y_{C2} = R = 40 \\, \\text{мм}$</span>.</p>

                <p><b>Фигура 3</b> – прямоугольный треугольник с катетами 150 мм и 30 мм.<br>
                Площадь <span class="math_equation">$A_3 = \\frac{1}{2} \\cdot 150 \\cdot (160 - 130) = \\frac{1}{2} \\cdot 150 \\cdot 30 = 2250 \\, \\text{мм}^2$</span>.<br>
                Площадь треугольника принимается отрицательной <span class="math_equation">$A_3 = -2250 \\, \\text{мм}^2$</span>.<br>
                Координаты центра тяжести треугольника C<sub>3</sub><br>
                <span class="math_equation">$x_{C3} = \\frac{1}{3} \\cdot (160 - 130) = \\frac{1}{3} \\cdot 30 = 10 \\, \\text{мм}$</span>; <span class="math_equation">$y_{C3} = \\frac{2}{3} \\cdot 150 = 100 \\, \\text{мм}$</span>.</p>
                `}
        ],
        "paragraph_4": [
            {"image": true, "image_path": "./content/page_content/img9_3.png", "img_sign": " ", "left_img": true, "no_sgn": false},
            {"text": `<p>Определяем координаты центра тяжести C всего сечения, используя формулы для плоской фигуры, составленной из площадей.</p>
                <p><span class="math_equation">$$x_C = \\frac{x_{C1} \\cdot A_1 + x_{C2} \\cdot A_2 + x_{C3} \cdot A_3}{A_1 + A_2 + A_3} =$$ $$ \\frac{80 \\cdot 24000 + 177 \\cdot 2512 + 10 \\cdot (-2250)}{24000 + 2512 + (-2250)} = 96.5 \\text{ мм}$$</span></p>
                <p><span class="math_equation">$$y_C = \\frac{y_{C1} \\cdot A_1 + y_{C2} \\cdot A_2 + y_{C3} \\cdot A_3}{A_1 + A_2 + A_3} =$$ $$\\frac{75 \\cdot 24000 + 40 \\cdot 2512 + 100 \\cdot (-2250)}{24000 + 2512 + (-2250)} = 69 \\text{ мм}$$</span></p>
                `}
        ],
    },
    "index_10":{
        "subtitle": "Практическая работа. Центр тяжести составных сечений. Определение координат центра тяжести (видео).",
        "step_of_popup": "Практическая работа. Центр тяжести составных сечений. Определение координат центра тяжести (видео)",
        "paragraph_1": [
            {"text": `<b> 1. Цель работы.</b>
                <p> 1.1. Определить положение центра тяжести плоской однородной фигуры методом подвешивания.<br>
                    1.2. Рассчитать положение центра тяжести плоской однородной фигуры аналитическим способом.<br>
                    1.3. Сравнить полученные результаты.<br>
                    </p>`},
            {"text": `<b> 2. Приборы и принадлежности для выполнения работы.</b>
                <p> 2.1. Плоское сложное сечение, вырезанное из плотного картона. <br>
                    2.2. Штатив для подвешивания. <br>
                    2.3. Нить.<br>
                    2.4. Отвес.<br>
                    2.5. Игла диаметром 1,5 – 2 мм. <br>
                    2.5 Миллиметровая бумага. <br>
                    </p>`},
            {"text": `<b> 3. Порядок выполнения работы.</b>`}       
        ],
        "paragraph_2": [
            {"image": true, "image_path": "./content/page_content/12_COK_prac.mp4","img_sign": " ", "left_img": false, "no_sgn": true}
        ],
    },
    "index_11":{
        "subtitle": "Изучите методику составления теплового баланса колонны экстракции установки селективной очистки масел фенолом.",
        "step_of_popup": "Изучите методику составления теплового баланса колонны экстракции установки селективной очистки масел фенолом.",
        "paragraph_1":[
            {"image": true, "image_path": "./content/page_content/img11_1.png","img_sign": " ", "left_img": false, "no_sgn": true, "left_img": true},
            {"text": `
                <p>В средневековье строители использовали деревянные балки, но с развитием металлургии и технологий обработки металлов, таких как кузнечное дело, металлические конструкции стали более распространенными. Эти элементы ковались целиком, либо собирались из отдельных деталей, которые соединялись кузнечной сваркой или заклепками. </p>
                <p>Появление прокатных станков в XVIII веке произвело революцию в производстве металлических элементов. Это позволило массово производить балки и профили с высоким уровнем точности и однородности.</p>
                <p><b class='blue_header'>Профиль </b> представляет собой заготовку с определённым поперечным сечением, и его производство осуществляется различными методами, такими как прокатка, прессование или волочение. Профили обычно изготавливаются в длинномерном виде, что делает их удобными для транспортировки и монтажа. Длина может варьироваться в зависимости от требований проекта.</p>
                <p><b class='blue_header'>Сортамент </b> – это совокупность различных профилей разных размеров. В металлические балки обычно применяются сложные сечения. Сложные поперечные сечения позволяют эффективно распределять нагрузки и использовать материал более экономично. Использование сложных форм позволяет рационально распределить материал по наиболее нагруженным участкам, что снижает издержки на производство </p>
                `}
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/page_content/img11_2.png","img_sign": " ", "left_img": false, "no_sgn": true},
            {"text": `
                <p>Металлические прокатные изделия могут иметь  разнообразную форму, но наиболее часто встречаются:
                    <ul class='ul_custom'>
                    <li>трубы - круглые и профильные;</li>
                    <li>металлические уголки - равнополочные и неравнополочные;</li>
                    <li>швеллеры;</li>
                    <li>тавры и двутавры (балки);</li>
                    <li>арматурные прутья различного сечения, периодические и гладкие;</li>
                    <li>сплошного сечения квадратные и круглые брусья</li>
                    </ul>    
                </p>
                <p>Каждый тип профиля имеет свои преимущества в зависимости от условий эксплуатации. Наиболее распространёнными материалами для производства профилей являются сталь, алюминий и иногда пластик. Каждый материал имеет свои преимущества в зависимости от условий эксплуатации.</p>
            `}
        ],
        "paragraph_3":[
            {"text": `
                <p>Размеры прокатных профилей стандартизированы и собраны в таблицы сортаментов прокатной стали, которые можно найти в приложениях ко многим учебникам и справочникам. В этих таблицах представлены все параметры сечений и ключевые геометрические характеристики прокатных профилей, соответствующие их номерам.
                </p>
            `},
            {"text": `<div class='two_img_custom'>
                <div>
                   <img src='./content/page_content/img11_3.png'>
                </div>
               <div>
                   <img src='./content/page_content/img11_4.png'>
                </div>
                </div>
                `},
            {"text": `
                <p><b>Применяемые стандарты прокатных профилей:</b>
                    <ul class='ul_custom'>
                    <li>ГОСТ 8239-89 Двутавры стальные горячекатанные. Сортамент;</li>
                    <li>ГОСТ 8509-93 Уголки стальные горячекатаные равнополочные. Сортамент;</li>
                    <li>ГОСТ 8510-86 Уголки стальные горячекатаные неравнополочные. Сортамент;</li>
                    <li>ГОСТ 8240-97 Швеллеры стальные горячекатаные. Сортамент.</li>
                    </ul>    
                </p>
            `}
        ]
    },
    "index_12":{
        "subtitle": "Определение центра тяжести сечения балок, выполненных из стандартного профиля.",
        "step_of_popup": "Определение центра тяжести сечения балок, выполненных из стандартного профиля.",
        "paragraph_1":[
            {"image": true, "image_path": "./content/page_content/img12_1.png","img_sign": " ", "no_sgn": true},
            {"text": `
                <p>Определить положение центра тяжести сечения, выполненного из стандартных профилей: двутавр № 20 и швеллер № 16.</p>
                <p>Применим к данному сечению метод разбиения, т.е. разобьем сечение на простые фигуры, у которых известны положения центров тяжести и площади.
                Фигура 1 – двутавр № 20. <br>
                Фигура 2 – швеллер № 16. <br>
                Так как данное сечение симметрично относительно оси Oy, то его центр тяжести будет лежать на этой оси, а значит <br>
                x<sub>C</sub> = 0.
                Осталось определить координату y<sub>C</sub> сечения.</p>
                <p>В соответствии с ГОСТ 8239-89 определяем геометрические характеристики двутаврового сечения. 
                Из стандарта площадь двутавра № 20 
                <span class="math_equation">$A_1 = 26.8 \\, \\text{см}^2$</span>.
                Координату <span class="math_equation">$y_{C1}$</span> центра тяжести двутавра C1 определяем как половину его высоты. Из стандарта высота двутавра № 20 <span class="math_equation">$h = 200 \\, \\text{мм}$</span>.
                <span class="math_equation">$y_{C1} = \\frac{h}{2} = \\frac{200}{2} = 100 \\, \\text{мм} = 10 \\, \\text{см}$</span>.</p>

                    `},
        ],
        "paragraph_2":[
            {"image": true, "image_path": "./content/page_content/img12_2.png","img_sign": "Рисунок 4", "left_img": false, "no_sgn": true, "left_img": true},
            //{"text2": "<b class='blue_header big_rectangle'>I. Общие положения</b>"},
            {"text": `
                <p>
                В соответствии с ГОСТ 8240-97 определяем геометрические характеристики сечения, выполненного из швеллера.
                Из стандарта площадь швеллера № 16 <br>
                <span class="math_equation">$A_2 = 18.1 \\, \\text{см}^2$</span>.
                Координату <span class="math_equation">$y_{C2}$</span> центра тяжести швеллера C2 определяем из стандарта <span class="math_equation">$z_0 = 1.8 \, \text{см}$</span>.
                Так как центр тяжести швеллера C2 находится ниже оси Ox, то координата <span class="math_equation">$y_{C2}$</span> отрицательна.
                <span class="math_equation">$y_{C2} = -z_0 = -1.8 \\, \\text{см}$</span>.
                Определяем координату <span class="math_equation">$y_C$</span> центра тяжести C всего сечения, используя формулы для плоской фигуры, составленной из площадей. <br>
                <span class="math_equation">$$y_C = \\frac{y_{C1} \\cdot A_1 + y_{C2} \\cdot A_2}{A_1 + A_2} = \\frac{10 \\cdot 26.8 + (-1.8) \\cdot 18.1}{26.8 + 18.1} = 5.2 \\, \\text{см}$$</span>
                </p>
                `}
        ]
    },
    "index_13":{
        "subtitle": "Какого типа стандартный профиль входит в состав изображенного сечение ?  Выберите все правильные ответы",
        "step_of_popup": "Тест. Какого типа стандартный профиль входит в состав изображенного сечение ?",
        "test":[
            {"type": 1},
            {"answers": [
                "Швеллер",
                "Уголок равнополочный",
                "Уголок неравнополочный",
                "Двутавр",
            ]},
            {"correct_answer": [0,1]},
            {"image": true, "image_path": "./content/tests_content/13_01.png"}
        ]
    },
    "index_14":{
        "subtitle": "Результаты",
        "step_of_popup": "Результаты",
        "result":[]
    },
}
window.dataLoaded = true;