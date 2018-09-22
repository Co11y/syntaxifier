# Syntaxifier: backend part

## Classes
It doesn't matter how these classes are really work in Python, but the outputting must look like in the following paragraphs.

### Sentence
This class represents the whole sentence.
```json
{
    "string": {WordsArray},
    "words": [
        "1": {Word},
        "2": {Word},
        ...
    ]
}
```
1. `string` is the sentence string.
2. `words` is an numbered list of `Word` classes.

### WordsArray
This class represents array of words). It looks like:
```json
[1, 2, ",", 3, "."]
```
Numbers in this array corresponds to `n` determined in `Word` class. Punctuation represented by strings.

### Word
This class represents word in sentence and its links to other words.
```json
{
    "word": "Слово",
    "type": "adj",
    "case": "nom",
    "gen": "fem",
    "pers": "pers1",
    "num": "sing",
    "anim": "noanim",
    "role": "sub",
    "link": {Link}
}
```
1. `word` contains string of word
2. `type` is type of word (`adj` - adjective, `verb` - verb, `noun`, etc.). For full list of names see `../README.md`
3. `case` is case of word (`nom` - nominative, `dat` - dative, etc.)
4. `gen` is gender of word (`fem` - feminitive, etc.)
5. `pers` is person of word (`pers1`, `pers2`, etc.)
6. `num` determines if word is singular (`sin`) or plural (`plu`)
7. `anim` is animality of word (is this word means live being or abstract)
8. `role` is role of word in sentence (`pred` - predicative, `def` - definition, etc.)
9. `link` is `Link` class.
Class output must contain only these properties that word has. E.g. if verb has not animality, there's no need to output `anim` in JSON.

### Link
This class represents link from between two words.
```json
{
    "to": 2,
    "type": "..."

}
```
1. `to` means end point of linking. These parameters should be the same as `n` in `Word` class. Counting starts from `1`.
2. `type` is type of linking (see [#Linking]).

## Outputting
Python must return result in JSON format if result is OK:
```json
{
    "ok": true,
    "result": {Sentence}
}
```
1. `ok` is Boolean that determines success of fail of syntax parsing.
2. `result` is `Sentence` class.

If the result is fail, it must look like this:
```json
{
    "ok": false,
    "error": {Error}
}
```
1. `error` is `Error` class.