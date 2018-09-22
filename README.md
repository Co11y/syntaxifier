# Syntaxifier

## Repo structure
```
syntaxifier/
├ exec/  —  Executable
│ ├ cli/  —  Graphic client
│ │ ├ api.js  —  Framework for API-requesting
│ │ ├ index.html  —  Start page
│ │ ├ style.css
│ │ └ ui.js
│ ├ bottle.py  —  Framework for Python web-server
│ ├ server.py  —  Starts localhost on :8080
│ └ run.py  —  Python executable
└ run.bat  —  Batch file to start exec/server.py
```

## Setting localhost
Firstly, download stable Python.
Then run `run.bat` from the root.
Graphic client will be available from `localhost:8080`.

## Code style
1. Use PEP8 (or Anaconda plugin for Sublime Text)
2. See rule 1
3. Write descriptive comment block at the start of each file and function
4. Use these names:
```
іменник               -> noun
прикметник            -> adj
прикметниковий іменник  -> adjn
дієслово              -> verb
дієприслівник         -> veradv
дієприкметник         -> veradj
числівник             -> numeral
займенник             -> pronoun
прислівник            -> adv
прийменник            -> prep
сполучник             -> conj
частка                -> part
вигук                 -> excl
відмінок              -> case
називний              -> nom
родовий               -> gen
давальний             -> dat
знахідний             -> acc
орудний               -> abl
місцевий              -> loc
кличний               -> voc
рід                   -> gen
жіночий               -> fem
чоловічий             -> mas
середній              -> neu
спільний              -> com
особа                 -> pers
перша особа           -> pers1
друга особа           -> pers2
третя особа           -> pers3
число                 -> num
однина                -> sin
множина               -> plu
істотність            -> anim
істота                -> animal
неістота              -> noanim
голосний звук         -> vow
приголосний звук      -> con
основа слова          -> base
корінь                -> root
суфікс                -> suff
префікс               -> pref
закінчення            -> end
узгодження            -> norm
словосполучення       -> phrase
роль у реченні        -> role
підмет                -> sub
присудок              -> pred
означення             -> def
обставина             -> circ
однорідні члени речення  -> homogen
вставні слова         -> inject
звертання             -> call
узагальнювальне слово ->
сполучник підрядності ->
сполучний сурядності  ->

```