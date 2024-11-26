window.dataLoaded = false;
    let title_of_eom = themeOfDEC;
    let methodRecomendation = 'Изучите материал о центре параллельных сил и центре тяжести. Чтобы перейти к учебному материалу, кликайте на блоки с текстом';
    let dropType = 11;
    let typeOfButtons = 'hexagon'; // Можер быть "hexagon", "lightning", "tiles" или "video" или "custom";
    let timings = [ // если typeOfButtons = 'video'
        { time: 30, name: "ertertetert 1" }, // если typeOfButtons = 'video'
        { time: 40, name: "gdfgdgdg 2" }, // если typeOfButtons = 'video'
        { time: 50, name: "Button 3" }, // если typeOfButtons = 'video'
        { time: 60, name: "Button 4" }, // если typeOfButtons = 'video'
        { time: 70, name: "Button 5" }, // если typeOfButtons = 'video'
        { time: 80, name: "Button 5fghfhfh" }, // если typeOfButtons = 'video'
        { time: 90, name: "Button 5kjkjkjk" }, // если typeOfButtons = 'video'
        { time: 100, name: "Button 5wewqeewqw" }, // если typeOfButtons = 'video'
    ]; // если typeOfButtons = 'video'
    let pathToVideo = './content/page_content/test_video.mp4'; // если typeOfButtons = 'video'
    let videoTitle2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'; // если typeOfButtons = 'video'
    // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let customPage = ``; // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let background_type = dropType;
    let literaListEOM1 = 
    `Завистовский, В. Э. Техническая механика : учебное пособие / В.Э. Завистовский. − М.: ИНФРА-М, 2021. − 376 с. − (Среднее профессиональное образование). − ISBN 978-5-16-015256-1. − Текст : электронный.
    Зиомковский, В. М. Техническая механика : учебное пособие для среднего профессионального образования / В. М. Зиомковский, И. В. Троицкий ; под научной редакцией В. И. Вешкурцева. − М.: Издательство Юрайт, 2023. − 288 с. − (Профессиональное образование). − ISBN 978-5-534-10334-2. − Текст : электронный // Образовательная платформа Юрайт [сайт].
    Олофинская, В. П. Техническая механика. Сборник тестовых заданий : учебное пособие / В.П. Олофинская. − 2-е изд., испр. и доп. − М.: ИНФРА-М, 2023. − 132 с. − (Среднее профессиональное образование). − ISBN 978-5-16-016753-4. − Текст : электронный.
    Гребенкин, В. З. Техническая механика : учебник и практикум для среднего профессионального образования / В. З. Гребенкин, Р. П. Заднепровский, В. А. Летягин ; под редакцией В. З. Гребенкина, Р. П. Заднепровского. − М.: Издательство Юрайт, 2023. − 390 с. − (Профессиональное образование). − ISBN 978-5-534-10337-2. − Текст : электронный // Образовательная платформа Юрайт [сайт].
    Гудимова, Л. Н. Техническая механика / Л. Н. Гудимова, Ю. А. Епифанцев, Э. Я. Живаго, А. В. Макаров. − 2-е изд., стер. (полноцветная печать). − Санкт-Петербург : Лань, 2023. − 324 с. − ISBN 978-5-507-45644-4. − Текст : электронный // Лань : электронно-библиотечная система.
    Джамай, В. В. Техническая механика : учебник для среднего профессионального образования / В. В. Джамай, Е. А. Самойлов, А. И. Станкевич, Т. Ю. Чуркина. − 2-е изд., испр. и доп. − М.: Издательство Юрайт, 2023. − 360 с. − (Профессиональное образование). − ISBN 978-5-534-14636-3. − Текст : электронный // Образовательная платформа Юрайт [сайт] ` // Список литературы
    const data = {
        "index_0":{
            "subtitle": "Система параллельных сил",
            "paragraph_1":[
                {"text": `Система сил, линии действия которых параллельны, называется <b class='blue_header'> системой параллельных сил.</b>`},
                {"image": false, "image_path": "./content/page_content/test_image.png"},
                {"text": `<div class='two_img_custom'>
                 <div>
                    <p> Если линии действия такой системы сил расположены в одной плоскости, то такая система сил называется <b> плоской системой параллельных сил</b></p>
                    <img class='zoomable' src='./content/page_content/img1_1.png'>
                 </div>
                <div>
                    <p>Если линии действия такой системы сил расположены в пространстве, то такая система сил называется <b> пространственной системой параллельных сил</b></p>
                    <img src='./content/page_content/img1_2.png'>
                 </div>
                 </div>`}
            ]
        },
        "index_1":{
            "subtitle": "Определение равнодействующей двух плоских параллельных сил",
            "paragraph_1":[
                {"text": `<p>Рассмотрим две сонаправленные параллельные силы, приложенные к телу <span class="math_equation">$ \\vec{F}_1 $</span> и <span class="math_equation">$ \\vec{F}_2 $</span>. <br>
                Величина равнодействующей этих сил в соответствии с равенством <span class="math_equation">$ \\vec{R} = \\sum \\vec{F}_k $</span> определяется <span class="math_equation">$ R = F_1 + F_2 $</span>. <br>
                Вектор равнодействующей направлен параллельно силам в ту же сторону. <br>
                Для определения положения линии действия силы <span class="math_equation">$ \\vec{R} $</span> необходимо воспользоваться теоремой Вариньона. <br>
                Алгебраическая сумма моментов всех сил системы <span class="math_equation">$ \\vec{F}_1, \\vec{F}_2, \\ldots, \\vec{F}_k $</span> относительно любой точки <em>O</em> плоскости равна моменту равнодействующей системы сил <span class="math_equation">$ \\vec{R} $</span> относительно этой же точки. <br>
                <span class="math_equation">$ M_O(\\vec{R}) = \\sum M_O(\\vec{F}_k) $</span>. <br>
                По этой теореме, рассмотрев моменты сил относительно точки <em>C</em>, через которую проходит линия действия равнодействующей, можно записать: <br>
                <span class="math_equation">$ M_C(\\vec{R}) = M_C(\\vec{F}_1) + M_C(\\vec{F}_2) $</span>.</p>
                `},
            ],
            "paragraph_2":[
                {"image": true, "image_path": "./content/page_content/img2_1.png", "img_sign": " "},
                {"text": `<p>Так как точка <em>C</em> лежит на линии действия равнодействующей <span class="math_equation">$ \\vec{R} $</span>, то <span class="math_equation">$ M_C(\\vec{R}) = 0 $</span>. Значит <br>
                <span class="math_equation">$ M_C(\\vec{F}_1) + M_C(\\vec{F}_2) = 0 $</span>. <br>
                <span class="math_equation">$ M_C(\\vec{F}_1) + M_C(\\vec{F}_2) = F_1 \\cdot AC - F_2 \\cdot CB = 0 $</span><br>
                Или <span class="math_equation">$ F_1 \\cdot AC = F_2 \\cdot CB $</span>. <br>
                Отсюда получаем соотношение <br>
                <span class="math_equation">$$ \\frac{F_1}{F_2} = \\frac{CB}{AC} $$</span><br>
                На основании свойства ряда равных отношений <br>
                <span class="math_equation">$$ \\frac{F_1}{CB} = \\frac{F_2}{AC} = \\frac{R}{AB} $$</span></p>`}
            ],
            "paragraph_3":[
                {"text": " "},
                {"image": true, "image_path": "./content/page_content/img2_2.png", "img_sign": " "}
            ],
            "paragraph_4":[
                {"text": `Аналогично можно определить величину и положение равнодействующей двух противоположно направленных параллельных сил.`},
                {"image": true, "image_path": "./content/page_content/img2_3.png", "img_sign": " "},
                {"text": `<p>В этом случае величина равнодействующей: 
                <span class="math_equation">$ R = |F_1 - F_2| $</span>
                </p>
                <p>Направлена она в сторону большей силы и её линия действия проходит за большей из двух сил.</p>
                <p>При этом на основании теоремы Вариньона получаем соотношение: 
                <span class="math_equation">$ M_C(\\vec{F_1}) + M_C(\\vec{F_2}) = F_1 \\cdot A_C - F_2 \\cdot C_B = 0 $</span>
                </p>
                <p>И ещё одно соотношение: 
                <span class="math_equation">$$ \\frac{F_1}{F_2} = \\frac{CB}{AC} $$</span>
                </p>
                `}
            ],
            "paragraph_5":[
                {"text":`<p>На основании свойства ряда равных отношений: 
                <span class="math_equation">$$ \\frac{F_1}{BC} = \\frac{F_2}{AC} = \\frac{R}{AB} $$</span>
                </p> `},
                {"image": false, "image_path": "./content/page_content/test_image.png"}
            ],
            "paragraph_6":[
                {"text": " "},
                {"image": true, "image_path": "./content/page_content/img2_4.png", "img_sign": " "}
            ],
            "paragraph_7":[
                {"text": `<p>В этом случае обязательно должно выполняться условие: 
                <span class="math_equation">$ |F_1| \\neq |F_2| $</span>, 
                так как при равенстве модулей этих сил мы получаем пару сил <span class="math_equation">$ (\\vec{F_1}, \\vec{F_2}) $</span>, которая не имеет равнодействующей.
                </p>
                `}
            ],
        },
        "index_2":{
            "subtitle": "Центр параллельных сил",
            "paragraph_1":[
                {"image": true, "image_path": "./content/page_content/img3_1.png", "img_sign": " "},
                {"text": `<p>Рассмотрим пространственную систему трех вертикальных параллельных сил <span class="math_equation"> $ \\vec{F_1}, \\vec{F_2} $ и $ \\vec{F_3} $</span>. Определим равнодействующую сил <span class="math_equation"> $ \\vec{F_1} $ и $ \\vec{F_2} $</span>. Равнодействующая <span class="math_equation"> $ \\vec{F_1-2} $</span> двух сонаправленных параллельных сил <span class="math_equation"> $ \\vec{F_1} $ и $ \\vec{F_2} $</span> равна по величине их сумме, а её линия действия делит отрезок, соединяющий точки приложения этих сил обратно пропорционально их величинам внутренним образом. Точка B − точка приложения равнодействующей этих двух сил.</p>
                 <p>
                <span class="math_equation">$ F_{1-2} = F_1 + F_2 $</span> и <span class="math_equation">
                    $ \\frac{F_{(1-2)}}{A_1 A_2} = \\frac{F_1}{A_2 B} = \\frac{F_2}{A_1 B} $ </span>
                </p>
                `}
            ],
            "paragraph_2":[
                {"text": `<p>
                    <span class="math_equation">Определим равнодействующую сил $ \\vec{F_{1-2}} $ и $ \\vec{F_3} $. Равнодействующая $ \\vec{R} $ двух сонаправленных параллельных сил $ \\vec{F_{1-2}} $ и $ \\vec{F_3} $ равна по величине их сумме, а её линия действия делит отрезок, соединяющий точки приложения этих сил обратно пропорционально их величинам внутренним образом. Точка C − точка приложения равнодействующей этих двух сил.</span>
                    </p>

                    <p>
                    <span class="math_equation">$ \\vec{R} = \\vec{F_{1-2}} + \\vec{F_3} = \\vec{F_1} + \\vec{F_2} + \\vec{F_3} $</span>
                    и
                    <span class="math_equation">
                        $ \\frac{\\vec{R}}{A_3 B} = \\frac{\\vec{F_{(1-2)}}}{A_3 C} = \\frac{\\vec{F_3}}{C B} $
                    </span>
                    </p>`},
                {"image": false, "image_path": "./content/page_content/test_video.mp4", "img_sign": " "},
            ],
            "paragraph_3":[
                {"image": true, "image_path": "./content/page_content/img3_2.png", "img_sign": " ", "left_img": true},
                {"text": `<p>
                    Линия действия равнодействующей <span class="math_equation">$ \\vec{R} $</span> вертикальных параллельных сил проходит через точку C, которая называется <b class='blue_header'> центром параллельных сил. </b></p>
                    <p>
                    Если все силы <span class="math_equation">$ \\vec{F_1} $</span>, <span class="math_equation">$ \\vec{F_2} $</span> и <span class="math_equation">$ \\vec{F_3} $</span> повернуть на один и тот же угол, то положение точки C не изменится, так как положение точек приложения сил системы останется прежним.
                    </p> 
                    <p><b>Это свойство центра параллельных сил для системы трех параллельных сил выполняется и для систем с любым количеством параллельных сил.</b></p>`},
            ]
        },
        "index_3":{
            "subtitle": "Определение координат центра параллельных сил",
            "step_of_popup": "step 3",
            "paragraph_1":[
                {"image": true, "image_path": "./content/page_content/img4_1.png", "img_sign": " "},
                {"text":`<p>
                    Рассмотрим систему вертикальных параллельных сил <span class="math_equation">$ \\vec{F_1}, \\vec{F_2}, \\dots, \\vec{F_n} $</span>. Пусть известны координаты точек приложения сил: <span class="math_equation">$ A_1(x_1, y_1, z_1) $</span>, <span class="math_equation">$ A_2(x_2, y_2, z_2) $</span>, …, <span class="math_equation">$ A_n(x_n, y_n, z_n) $</span>.
                    </p>
                    <p>
                    Пусть сила <span class="math_equation">$ \\vec{R} $</span> − равнодействующая системы параллельных сил с координатами <span class="math_equation">$ C(x_C, y_C, z_C) $</span>. Сила <span class="math_equation">$ \\vec{R} $</span> эквивалентна системе сил <span class="math_equation">$ (\\vec{F_1}, \\vec{F_2}, \\dots, \\vec{F_n}) $</span>.
                    </p>
                    <p>
                    Тогда на основании теоремы Вариньона относительно оси Oz: 
                    <span class="math_equation">$$ M_z(\\vec{R}) = R \\cdot x_C = \\sum M_z(\\vec{F_k}) = \\sum F_k \\cdot x_k $$
                    но $ R = F_1 + F_2 + \\dots + F_n = \\sum F_k $</span>.
                    </p> `},
            ],
            "paragraph_2":[
                {"text":`
                    <p>
                    Отсюда следует 
                    <span class="math_equation">$ x_C \\cdot \\sum F_k = \\sum F_k \\cdot x_k $</span>, 
                    или 
                    <span class="math_equation">$ x_C = \\frac{\\sum F_k \\cdot x_k}{\\sum F_k} $</span>.
                    </p>

                    <p>
                    Если применить теорему Вариньона относительно оси Ox, то получим <br>
                    <span class="math_equation">$ M_x(\\vec{R}) = R \\cdot z_C = \\sum M_x(\\vec{F_k}) = \\sum F_k \\cdot z_k $</span>, 
                    или 
                    <span class="math_equation">$ z_C = \\frac{\\sum F_k \\cdot z_k}{\\sum F_k} $</span>.
                    </p>

                    <p>
                    Повернув систему сил на 90° и применив теорему Вариньона относительно оси Ox, получим <br> 
                    <span class="math_equation">$ M_x(\\vec{R}) = R \\cdot y_C = \\sum M_x(\\vec{F_k}) = \\sum F_k \\cdot y_k $</span>, 
                    или 
                    <span class="math_equation">$ y_C = \\frac{\\sum F_k \\cdot y_k}{\\sum F_k} $</span>.
                    </p>
                    <p>
                    Таким образом координаты центра параллельных сил определяются по формулам: <br>
                    <span class="math_equation">$ x_C = \\frac{\\sum F_k \\cdot x_k}{\\sum F_k} $</span>; 
                    <span class="math_equation">$ y_C = \\frac{\\sum F_k \\cdot y_k}{\\sum F_k} $</span>; 
                    <span class="math_equation">$ z_C = \\frac{\\sum F_k \\cdot z_k}{\\sum F_k} $</span>, 
                    где <span class="math_equation"> $ F_k $ − модули значения сил; 
                    $ x_k $, $ y_k $, $ z_k $ </span> − координаты точек их приложения.
                    </p> `},
                {"image": false, "image_path": "./content/page_content/test_image.png"}
            ]
        },
        "index_4":{
            "subtitle": "Центр тяжести тела",
            "step_of_popup": "step 4",
            "paragraph_1":[
                {"image": true, "image_path": "./content/page_content/img5_1.png",  "img_sign": " "},
                {"text":`<b>Сила тяжести</b> − это результат действия закона всемирного тяготения, который описывает притяжение между двумя телами.
                    На любое тело, находящееся вблизи поверхности Земли, действует сила тяжести, направленная к центру Земли. Эта сила распределена по всему объему тела и все силы тяжести частиц тела представляют из себя систему сил, сходящуюся в центре Земли. Поскольку размеры большинства тел значительно меньше радиуса Земли, то углы между линиями действия сил тяжести двух соседних точек тела настолько малы, что силы тяжести, действующие на отдельные частицы тела, можно считать параллельными`},
                {"text":`Равнодействующая системы параллельных сил тяжести отдельных частиц тела 𝑮 ⃗k будет эквивалентна силе тяжести всего тела, а точка через которую проходит линия действия этой равнодействующей называется центром тяжести тела. Причем положение этой точки не зависит от положения тела в пространстве, она всегда неизменно связана с этим телом. Центр тяжести может находится как внутри тела, так и за его пределами. `},
                {"text":`На основании этого можно сказать, что <b class='blue_header'> центр тяжести </b> − это центр параллельных сил тяжести частиц, составляющих тело. И для него действуют соотношения для определения координат центра параллельных сил.`},
                {"text":`<p>
                    На основании этого можно сказать, что центр тяжести − это центр параллельных сил тяжести частиц, составляющих тело. И для него действуют соотношения для определения координат центра параллельных сил:
                    </p>
                    `}
            ],
            "paragraph_2":[
                {"image": true, "image_path": "./content/page_content/img5_2.png",  "img_sign": " ", "left_img": true},
                {"text": `
                     <p>
                    <span class="math_equation">$ x_C = \\frac{\\sum G_k \\cdot x_k}{\\sum G_k} $</span>; 
                    <span class="math_equation">$ y_C = \\frac{\\sum G_k \\cdot y_k}{\\sum G_k} $</span>; 
                    <span class="math_equation">$ z_C = \\frac{\\sum G_k \\cdot z_k}{\\sum G_k} $</span>,
                    </p>
                    <p>
                    где <span class="math_equation">$ G_k $</span> − сил тяжести частиц тела.
                    </p>
                    <p>
                    Данные формулы используются в случае нахождения центра тяжести неоднородных тел.
                    </p>`}
            ]
        },
        "index_5":{
            "subtitle": "Определение центра тяжести однородных тел",
            "paragraph_1":[
                {"image": true, "image_path": "./content/page_content/img6_1.png", "img_sign": " "},
                {"text":`<p>
                    <b class='blue_header'>1.</b> Для объемных однородных тел вес каждой частицы тела определяется как 
                    <span class="math_equation">$ G_k = V_k \\cdot \\gamma $</span>,
                    где <span class="math_equation">$ V_k $</span> − объем частицы тела;
                    <span class="math_equation">$ \\gamma $</span> − удельный вес тела, Н/м³.
                    </p>
                    <p>
                    Тогда формула для определения координаты центра тяжести тела <span class="math_equation"> $ x_C $ </span>принимает вид:
                    </p>
                    <p>
                    <span class="math_equation">$ x_C = \\frac{\\sum V_k \\cdot x_k}{\\sum V_k} = \\frac{\\sum \\gamma \\cdot V_k \\cdot x_k}{\\sum \\gamma \\cdot V_k} = \\frac{\\gamma \\cdot \\sum V_k \\cdot x_k}{\\gamma \\cdot \\sum V_k} = \\frac{\\sum V_k \\cdot x_k}{\\sum V_k} $</span>.
                    </p>

                    <p>
                    Аналогично для координат <span class="math_equation"> $ y_C $ и $ z_C $ </span>:
                    </p>
                    <p>
                    <span class="math_equation">$ y_C = \\frac{\\sum V_k \\cdot y_k}{\\sum V_k} $</span>; 
                    <span class="math_equation">$ z_C = \\frac{\\sum V_k \\cdot z_k}{\\sum V_k} $</span>.
                    </p>
                    `},
            ],
            "paragraph_2":[
                {"image": true, "image_path": "./content/page_content/img6_2.png", "img_sign": " ", "left_img": true},
                {"text":`<p>
                      <b class='blue_header'>2.</b> Для плоских фигур используют две координаты <span class="math_equation"> $ x_C $ и $ y_C $</span>.
                     </p>
                      <p>
                      <b>2.1</b> Для плоской фигуры, составленной из линий, прутков, вес участка длиной <span class="math_equation"> $ l_k $ </span> определяется как
                      </p>
                      <p>
                      <span class="math_equation">$ G_k = l_k \\cdot \\gamma_L $</span>,
                      </p>
                      <p>
                      где <span class="math_equation"> $ \\gamma_L $ </span> − удельный вес единицы длины тела, Н/м.
                      </p>
                        `}
            ],
            "paragraph_3":[
                {"text":`<p>
                    Тогда формула для определения координаты центра тяжести тела <span class="math_equation"> $ x_C $ </span> принимает вид:
                    </p>
                    <p>
                    <span class="math_equation">$ x_C = \\frac{\\sum l_k \\cdot x_k}{\sum l_k} = \\frac{\\sum \\gamma_L \\cdot l_k \\cdot x_k}{\\sum \\gamma_L \\cdot l_k} = \\frac{\\gamma_L \\cdot \\sum l_k \\cdot x_k}{\\gamma_L \\cdot \\sum l_k} = \\frac{\\sum l_k \\cdot x_k}{\\sum l_k} $</span>.
                    </p>
                    <p>
                    Аналогично для координаты <span class="math_equation"> $ y_C $ </span>:
                    </p>
                    <p>
                    <span class="math_equation">$ y_C = \\frac{\\sum l_k \\cdot y_k}{\\sum l_k} $</span>.
                    </p>
                    <p>
                    <b>2.2</b> Для плоской фигуры, составленной из площадей, вес участка площадью <span class="math_equation"> $ A_k $ </span> определяется как
                    </p>
                    <p>
                    <span class="math_equation">$ G_k = A_k \\cdot \\gamma_A $</span>,
                    </p>
                    <p>
                    где <span class="math_equation"> $ \\gamma_A $ </span> − удельный вес единицы площади тела, Н/м².
                    </p>
                        `},
            ],
            "paragraph_4":[
                {"image": true, "image_path": "./content/page_content/img6_3.png", "img_sign": " "},
                {"text":`<p>
                    Тогда формула для определения координаты центра тяжести тела <span class="math_equation"> $ x_C $ </span> принимает вид:
                    </p>
                    <p>
                    <span class="math_equation">$ x_C = \\frac{\\sum A_k \\cdot x_k}{\\sum A_k} = \\frac{\\sum \\gamma_A \\cdot A_k \\cdot x_k}{\\sum \\gamma_A \\cdot A_k} = \\frac{\\gamma_A \\cdot \\sum A_k \\cdot x_k}{\\gamma_A \\cdot \\sum A_k} = \\frac{\\sum A_k \\cdot x_k}{\\sum A_k} $</span>.
                    </p>
                    <p>
                    Аналогично для координаты <span class="math_equation"> $ y_C $ </span>:
                    </p>
                    <p>
                    <span class="math_equation">$ y_C = \\frac{\\sum A_k \\cdot y_k}{\\sum A_k} $</span>.
                    </p>
                        `}
            ]
        },
        "index_6":{
            "subtitle": "Координаты центра тяжести простых плоских фигур",
            "step_of_popup": "step 3",
            "paragraph_1":[
                {"text": `<div class='two_img_custom'>
                    <div>
                        <p class='blue_header'><b>1. Круг</b></p>
                       <p> Центр тяжести круга находится в его геометрическом центре </p>
                       <img src='./content/page_content/img7_1.png'>
                    </div>
                   <div>
                        <p class='blue_header'><b>2. Прямоугольник</b></p>
                       <p>Центр тяжести прямоугольника лежит на пересечении его диагоналей.</p>
                       <img src='./content/page_content/img7_2.png'>
                    </div>
                    </div>`},
                    {"text": `<div class='two_img_custom'>
                        <div>
                            <p class='blue_header'><b>3. Треугольник</b></p>
                           <p>Центр тяжести треугольника лежит на пересечении его медиан.</p>
                           <img src='./content/page_content/img7_3.png'>
                        </div>
                       <div>
                            <p class='blue_header'><b>4. Полукруг</b></p>
                           <p>Центр тяжести полукруга лежит на его оси симметрии на расстоянии  4𝑅/3𝜋  от центра полукруга.</b></p>
                           <img src='./content/page_content/img7_4.png'>
                        </div>
                        </div>`}
            ]
        },
        "index_7":{
            "subtitle": "Способы определения координат центра тяжести",
            "step_of_popup": "step 4",
            "paragraph_1":[
                {"text":`
                    <p class='blue_header'><b> 1. Метод симметрии </b></p>
                    `},
            ],
            "paragraph_2":[
                {"image": true, "image_path": "./content/page_content/img8_1.png", "img_sign": " ", "left_img": true},
                {"text":"Для однородного тела, которое имеет ось, плоскость ил центр симметрии, его центр тяжести лежит на этой оси, в этой плоскости или в центре симметрии соответственно."}
            ],
            "paragraph_3":[
                {"text":`
                    <p class='blue_header'><b> 2. Метод разбиения </b></p>
                    `},
            ],
            "paragraph_4":[
                {"image": true, "image_path": "./content/page_content/img8_2.png", "img_sign": " "},
                {"text":`Сечение разбивают на простые части, для каждой из которых известны положения центров тяжести и площади. Изображенную на рисунке фигуру можно разбить на два прямоугольника 1 и 2, у которых можно достаточно просто определить координаты центра тяжести. Как было сказано выше, центр тяжести прямоугольника лежит на пересечении его диагоналей.
                    <p>
                    Фигура 1 – прямоугольник площадью <span class="math_equation">$ A_1 $</span>, с координатами центра тяжести <span class="math_equation">$ C_1(x_1, y_1) $</span>.
                    </p>
                    <p>
                    Фигура 2 – прямоугольник площадью <span class="math_equation">$ A_2 $</span>, с координатами центра тяжести <span class="math_equation">$ C_2(x_2, y_2) $</span>.
                    </p>

                    <p>
                    Применяя формулу для плоской фигуры, составленной из площадей, координаты центра тяжести <span class="math_equation">$ C $</span> всего сечения определяются следующим образом:
                    </p>

                    <p>
                    <span class="math_equation">$ x_C = \\frac{x_1 \\cdot A_1 + x_2 \\cdot A_2}{A_1 + A_2} $</span>;
                    </p>

                    <p>
                    <span class="math_equation">$ y_C = \\frac{y_1 \\cdot A_1 + y_2 \\cdot A_2}{A_1 + A_2} $</span>.
                    </p>

                    <p>
                    <span class="math_equation">$ A = A_1 + A_2 $</span> – площадь всего сечения.
                    </p>
                    `}
            ],
            "paragraph_5":[
                {"text":`
                    <p class='blue_header'><b> 3. Метод отрицательных площадей </b></p>
                    `},
            ],
            "paragraph_6":[
                {"image": true, "image_path": "./content/page_content/img8_3.png", "img_sign": " "},
                {"text":`
                    <p>
                    Этот метод применяется для сечений, у которых имеются вырезы. Вырезы рассматриваются как части с отрицательной площадью. Изображенную на рисунке фигуру можно разбить на прямоугольник 1 и круг 2. Центр тяжести прямоугольника <span class="math_equation">$ C_1 $</span> лежит на пересечении его диагоналей, а центр тяжести круга <span class="math_equation">$ C_2 $</span> в его геометрическом центре.
                    Так как круг вырезан, то его площадь <span class="math_equation">$ A_2 $</span> имеет отрицательное значение, т.е. <span class="math_equation">$ -A_2 $</span>.
                    </p>
                    <p>
                    Фигура 1 – прямоугольник площадью <span class="math_equation">$ A_1 $</span>, с координатами центра тяжести <span class="math_equation">$ C_1(x_1, y_1) $</span>.<br>
                    Фигура 2 – круг площадью <span class="math_equation">$ -A_2 $</span>, с координатами центра тяжести <span class="math_equation">$ C_2(x_2, y_2) $</span>.<br>
                    Применяя формулу для плоской фигуры, составленной из площадей, координаты центра тяжести <span class="math_equation">$ C $</span> всего сечения определяются следующим образом:
                    </p>
                    <p>
                    <span class="math_equation">$ x_C = \\frac{x_1 \\cdot A_1 + x_2 \\cdot (-A_2)}{A_1 - A_2} $</span>;
                    </p>
                    <p>
                    <span class="math_equation">$ y_C = \\frac{y_1 \\cdot A_1 + y_2 \\cdot (-A_2)}{A_1 - A_2} $</span>.
                    </p>
                    <p>
                    <span class="math_equation">$ A = A_1 - A_2 $</span> – площадь всего сечения.
                    </p>
                    `}
            ]
        },
        "index_8":{
            "subtitle": "Экспериментальные способы определения центра тяжести",
            "step_of_popup": "step 5",
            "paragraph_1":[
                {"text":`
                    <p class='blue_header'><b> 1. Метод подвешивания </b></p>
                    `},
            ],
            "paragraph_2":[
                {"text":` <p><b>Метод подвешивания </b> – это простой и наглядный способ определения центра тяжести плоской фигуры. Для его реализации необходимо иметь плоскую фигуру, например, из картона или другого легкого материала. Фигура должна быть четко вырезана и иметь равномерную толщину.</p>
                <p>1) На краю фигуры надо найти точку, где можно ее подвесить (например с помощью нитки). Фигуру надо подвесить на штативе так, чтобы она могла свободно вращаться.
                После подвешивания фигура будет находиться в равновесии и примет положение, при котором ее центр тяжести будет находиться прямо под точкой подвешивания.  Чтобы провести вертикальную линию вниз от точки подвешивания можно применить уровень или отвес. Линия отвеса покажет направление силы тяжести.</p>
                <p>2) Процесс подвешивания надо повторить, подвесив фигуру из другой точки. Это позволит провести вторую вертикальную линию.
                Центр тяжести фигуры C будет находиться в точке пересечения двух проведенных вертикальных линий. Эта точка и будет искомым центром тяжести. </p>
                <p>3) Для того, чтобы окончательно убедиться в том, что центр тяжести найден верно, можно подвесить фигуру в третий раз. Третья вертикальная линия должна пройти через точку пересечения двух, ранее полученных линий </p>`}
            ],
            "paragraph_3":[
                {"image": true, "image_path": "./content/page_content/img9_1.png", "img_sign": " "},
                {"text":" "}
            ],
            "paragraph_4":[
                {"text":` Этот метод подходит для фигур с однородной плотностью и позволяет наглядно продемонстрировать свойство центра тяжести.`}
            ],
        }
    };
    const themesOfEOM1 = Object.values(data).map(item => item.subtitle).join('\n');
window.dataLoaded = true;