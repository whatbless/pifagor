const player = document.querySelector('.player-r'),
    playBtn = document.querySelector('.play-r'),
    prevBtn = document.querySelector('.backward-r'),
    nextBtn = document.querySelector('.forward-r'),
    audio = document.getElementById("audio-r"),
    progressContainer = document.querySelector('.progress_container'),
    progressBar = document.querySelector('.progress'),
    playPause = document.getElementById("button-r"),
    title = document.querySelector('.voice'),
    namer = document.querySelector('.name-r'),
    score = document.querySelector('.score-r'),
    description = document.querySelector('.des-r')

const voices = ['mihail96', 'gleb98', 'koto90', 'roman88', 'yura96', 'karina88', 'albina88', 'ekaterina78']
const names = ['Михаил', 'Глеб', 'Кото', 'Роман', 'Юрий', 'Карина', 'Альбина', 'Екатерина']
const scores = ['<strong><i id="star" class="fa-regular fa-star"></i>96 баллов</strong>', '<strong><i id="star" class="fa-regular fa-star"></i>98 баллов</strong>', '<strong><i id="star" class="fa-regular fa-star"></i>90 баллов</strong>', '<strong><i id="star" class="fa-regular fa-star"></i>88 баллов</strong>', '<strong><i id="star" class="fa-regular fa-star"></i>96 баллов</strong>', '<strong><i id="star" class="fa-regular fa-star"></i>88 баллов</strong>', '<strong><i id="star" class="fa-regular fa-star"></i>88 баллов</strong>', '<strong><i id="star" class="fa-regular fa-star"></i>78 баллов</strong>']
const descriptions = ['"Евгений Юрьевич*, здравствуйте. Извините за голосовое, но я просто не могу молчать. Я сейчас вышел с экзамена, просто насколько я вам благодарен вы даже не можете себе представить. Я решил всю первую часть, абсолютно все задания из первой части были из вашего курса по первой части, я решил их где-то за 7 минут. Вторую часть я начал с 12. 12 элементарное, решил за 5 минут сразу в чистовик, тоже самое с 14, там показательная замена сразу. Решал экономическую, сначала ответ получился некрасивый, но потом я перепроверил всю 2 часть с 12 по 15, нашел две ошибки и получились красивые ответы, и они даже больше подходили. Я решил это все за час и у меня осталось 3 часа на 4 задачи. Планеметрия была интересная, но я смог решить. Стереометрия была самая сложная задача варианта, я очень долго думал как можно найти площадь сечения, но в итоге через несколько подобий я смог это сделать. Параметр был легкий, который решался графически, там с окружностями, такой как на дальнем востоке, а вот 18 единственное я решил пункт б, но не смог обосновать пункт а, и в итоге я сейчас надеюсь на 100 баллов если мне засчитают просто ответ в пункте а, потому что я сделал абсолютно все, спасибо вам огромное."',
    '"Здравствуйте, Евгений. Сегодня пришли результаты по профильной математике и хочу вам сказать огромное спасибо за то что внесли огромный вклад в мою подготовку, и я набрал 98 баллов с глупой ошибкой в 1 части, в 10 задании, просто не прочитал что в условии нужно 3 лампочки, а не две. Лампочки, кстати, как вы и предсказывали. Благодаря вам я научился решать параметры, лучше стал решать стереометрию, планеметрию и очень много еженедельных вариантов (это очень полезно) и хочу вам сказать спасибо еще раз, всегда вас рекомендовал и буду рекомендовать, ведь вы лучший репетитор по профильной математике в мире."',
    '"Евгений, здравствуйте. Спасибо вам большое за вашу работу, за ваш труд, ведь благодаря ему мне удалось написать ЕГЭ по профильной математике на 90 баллов. В начале, летом, перед 11 классов я зашел решить вариантик РешуЕГЭ и написал на порог. Мне вас посоветовала знакомая знакомых, почти мне незнакомая стобальница, сказала что занималась у вас и что ей очень понравилось в прошлом году, и я естественно сразу начал смотреть ваш ютуб канал, позже приобрел курс и начал заниматься. И получилось так, что я очень сильно загорелся математикой, хотя раньше она у меня получалась, но прям такой любви у меня к ней небыло, а благодаря вам это случилось. На осенних каникулах я за две недели прошел видеокурс 12, 14 и 15 полностью все и тогда я задумался о том что: "А как я буду, если я настолько продуктивен, когда мне не надо ходить в школу, то как я буду заниматься дальше" и вот тут есть ответ на вопрос, который скорее всего вам задают часто, я знаю его часто задают Алексею Кабанову, учителю информатики, кстати из вашего города тоже, я вот ему рассказал один ответ, мою историю, как у меня получилось. Я узнал, что оказывается можно перевестись на заочную форму обучения, и я полугодия (аттестацию) закрывал как сессию, у меня по каждому предмету были экзамены, я их ходил сдавал и получается все полгода я мог в школу не ходить. А по прдеметам по которым я сдавал ЕГЭ, я сдавал пробники в МЦКО. И у меня получилось перевестись на заочку и у меня было огромное колчичество свободного времени, и несмотря на то что я начал готовиться поздно, я успел пройти все ваши видеокурсы до единого, до последнего задания (и 13, и 16, и 17), разве что в 17 фильмы полутрачасовые я не успел посмотреть. Был готов полностью, был готов на все, единственной вот только что видеокурс по 18 жалко не вышел. На ЕГЭ чуть-чуть переволновался, чуть-чуть наошибался, но впринципе результатом доволен, потому что в начале года мечтал о 70, благодаря вам 90, спасибо вам огромное, неимоверное, крайне рекомендую, я и рекомендовал всем своим друзьям и весь мой близкий круг общения готовился с вами и буду рекомендовать будущим выпускникам тоже заниматься с вами, меня пригласили вести факультатив в моей школе для подготовки к ЕГЭ, я обязательно упомяну ваши курсы на нем, спасибо огромное."',
    '"Здравствуйте, Евгений, я бы хотел поблагодарить вас за вашу подготовку, всего лишь 5 месяцев назад, я написал свой пробник на 1 балл. Я решил только первый номер, и уже спустя пару месяцев подготовки с вами я начал писать ваши пробники ближе к 80, а сам ЕГЭ в итоге написал на 88. Ну это просто нереально. Я незнаю кто лучше вас может подготовить к ЕГЭ, с одного балла за 5 месяцев, практически 90. Это при том что я неправльно решил 7 номер, неправильно переписал условие, так бы было 90, я незнаю. Еще раз хочу сказать вам спасибо, я думаю без вашей подготовки я вряд ли набрал бы даже 80, особенно советую всем смотреть еженедельный разбор вариантов, я считаю они сыграли реально важную роль в моей подготовке."',
    '"Здравствуйте, Евгений. Мне пришли результаты, у меня 96 баллов, я безумно счастлив, я незнаю что еще сказать. Спасибо вам большое за все, за весь ваш труд который вы делаете, чтобы делать лучше нас. Это безумно круто что вы занимаетесь этим и помогаете простым ученикам, которые хотят поступить на бюджет и просто поступить впринципе. Это очень круто, от меня никто не ожидал такого результата в школе, на меня особо не расчитывали, ждали что я наберу максимум 80 баллов, а тут я набрал 96. Это безумно круто, еще раз спасибо вам большое, я безумно счастлив, я обязательно буду рекомендовать вас всем, кто будет спрашивать у меня насчет математики, это очень круто, спасибо вам большое."',
    '"Здравствуйте, Евгений, я бы хотела вам сказать огромное спасибо за ваш труд, за ваши курсы, потому что во-первых ваши курсы они помогают сэкономить деньги, не нужно тратить деньги на репетиторов или на онлайн-школы, а просто приобрести курс и в своем режиме, когда удобно решать. Я купила все ваши курсы, я их все прорешала, и вы очень-очень подробно объясняете, так что даже если человек не разбирается в какой-то теме вообще, то пройдя курс он решает эти задания. Так, например у меня было с геометрией, все у меня было с ней грустно, но вот зимой я приобрела курс по планеметрии и стереометрии и после этого решала вообще все задачи, практически, только тяжелые 16 у меня не получалось решать, ну вот и на ЕГЭ я к сожалению тоже их не решила, но я набрала достойное, я считаю, количество баллов - 88. Конечно я хотела больше, но без вас я бы даже этих баллов не набрала. Курс по параметрам у вас тоже очень хороший, потому что это тяжелая тема, а у вас она так разжевана, что ну легко научиться их решать. Я, например, начала решать параметры вообще за месяц до ЕГЭ. Мне все говорили что это вообще не возможно, что параметры нужно проходить хотя бы год, и тем не менее у меня 4 из 4 на экзамене было за это задание. А по 12, 14 и 15 номерам вашего курса это вообще сказка, потому что самое важное это то что вы очень подробно объяснете и то что это в правильном оформлении и поэтому я на экзамене вообще не переживала за свое оформление, потому что вы научили правильно оформлять. Вот, так что, спасибо вам большое за ваш труд."',
    '"Добрый вечер, Евгений. Уже сегодня где-то в 11 я узнала свои результаты. Очень рада, 88 баллов это для меня более чем достаточно для поступления, в сумме вышло достаточно много, поэтому я посчитала уже все, я поступила куда хотела. Просто у тебя шикарные курсы, ты шикарно объясняешь, я незнаю, я все понимала, вот честно. Особенно курс по параметрам это просто пушка. Решить все эти 180 заданий примерно, где примерно 300 видео, потому что решений несколько, это просто пушка улет я считаю этот курс и такая стоимость за него просто мизерная. Потом, курсы по 12 - отлично объясняешь как нужно оформлять так, чтобы ни к чему не придрались, никакой эксперт, я прям следила, когда писала на экзамене, вот сделай то, сделай это, особенно пункт б, это самое главное, отметить на окружности все, ничего не забыть, дугу показать иначе все 0 баллов. Потом, я у тебя купила все курсы впринципе, все курсы я полностью прошла, жалко было что 13 не решила и вот насчет 15 мне так обидно, я такую глупость написала, я как-то не собралась на экзамене видимо и не смогла ее все-таки решить. Мне было обидно, что не правильно, ну ладно это сейчас уже не играет огромной роли. Еще я покупала у тебя курс "Вспомнить все". Тоже очень классный курс, правда, скажу честно я под конец уже не успевала, у меня был экзамен по химии, мне приходилось как-то совмещать, было очень трудно, потом сразу русский, потом сразу математика. Получается планеметрию я не смотрела именно "Вспомнить все", и я ее решила. Я просто, я офигела когда ее решила. Я прихожу на экзамен, и я понимаю что нужно решать все, хочешь ты или нехочешь - решай все просто, потому что где-то могут снять, зато здесь дадут баллы. И я посмотрела пункт а, я сразу поняла что это подобие, я просто себе в черновик написала какое подобие мне нужно доказать, ну отношение... И если честно, все твои курсы по тригонометрии мне помогли, ведь я поняла что ее можно использовать везде... Ну ладно 92 - 88, как бы, для меня это сейчас не играет никакой роли. Еще раз огромное спасибо за все курсы, ты просто лучший, и все эти стримы бесплатные, ты все делаешь бесплатно почти. Ты так много делаешь бесплатно, я вот это хотела сказать. И курсы у тебя супер дешевые. Мне так нравится, когда люди занимаются тем, что помогают ученикам получать хорошие баллы. Еще раз спасибо за все курсы, я очень довольна своим результатом."',
    '"Здравствуйте, Евгений. Я написала экзамен. Я даже незнаю свои баллы, которые прийдут очень скоро. И хочу вам сказать огромное спасибо за, вообще, весь труд, который вы проделываете. Я просто незнаю куда можно оставить отзыв, чтобы большее количество людей узнала о том, что существует такой прекрасный человек как вы, потому что вся база знаний которая нужна, вы ее всю полностью даете. Мне попалось все то, что мы с вами проходили на курсе. "Вспомнить все" и вообще все такие номера были, которые разбирали на вариантах или еще где-либо. Вы еще и ванга, потому что очень много номеров попалось именно с вашего прогноза. Я просто хочу сказать огромное спасибо, потому что вы делаете просто великолепные вещи, ни одна онлайн-школа как-то не делает столько, сколько делаете вы, изучая настолько ЕГЭ, рассказывая здесь какие-то моменты, там какие-то моменты, поясняя что вот это задание попадалось тогда-то тогда-то, это еще тогда, откуда оно, где, каждому все просто размусоливая очень сильно. На курсе "Вспомнить все" делать справочные материалы, делать бланки для работы, успевать проверять столько домашнего задания, сколько вам скидывают ученики. Просто огромное вам спасибо, даже вот, незная баллов, это уже мои проблемы как я сдала-несдала, хочу сказать, что вы просто великолепный человек."']

let voiceIndex = 0

function Init(voice) {
    title.innerHTML = voice
    audio.src = `ratings/${voice}.mp3`
}

Init(voices[voiceIndex])

function PlayVoice() {
    player.classList.add('play')
    audio.play()
    playPause.classList.remove('fa-play')
    playPause.classList.add('fa-pause')
}

function PauseVoice() {
    player.classList.remove('play')
    audio.pause()
    playPause.classList.remove('fa-pause')
    playPause.classList.add('fa-play')
}

playBtn.addEventListener('click', () => {
    const isPLaying = player.classList.contains('play')
    if (isPLaying) {
        PauseVoice()
    } else {
        PlayVoice()
    }
})

function NextVoice() {
    voiceIndex++

    if (voiceIndex > voices.length - 1) {
        voiceIndex = 0
    }
    namer.innerHTML = names[voiceIndex]
    score.innerHTML = scores[voiceIndex]
    description.innerHTML = descriptions[voiceIndex]

    Init(voices[voiceIndex])
    PlayVoice()
}

nextBtn.addEventListener('click', NextVoice)

function PrevVoice() {
    voiceIndex--

    if (voiceIndex < 0) {
        voiceIndex = voices.length - 1
    }
    namer.innerHTML = names[voiceIndex]
    score.innerHTML = scores[voiceIndex]
    description.innerHTML = descriptions[voiceIndex]

    Init(voices[voiceIndex])
    PlayVoice()
}

prevBtn.addEventListener('click', PrevVoice)

function UpdateProgress(event) {
    const { duration, currentTime } = event.srcElement
    const progressPrecent = (currentTime / duration) * 100
    progressBar.style.width = `${progressPrecent}%`
}
audio.addEventListener('timeupdate', UpdateProgress)

function SetProgress(event) {
    const width = this.clientWidth
    const clickX = event.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', SetProgress)

audio.addEventListener('ended', NextVoice)