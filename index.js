#!/usr/bin/env node
const exect = require('child_process').exec
const path = require('path')
const fs = require('fs')

const SOUND = 'sextou'

const mainPath = path.dirname(fs.realpathSync(__filename))
const soundPath = path.join(mainPath, './', SOUND)

const exec = (command) => exect(command, (error) => error && console.error(error))

const drawAlien = () => console.log(`.     .       .  .   . .   .   . .    +  .
.     .  :     .    .. :. .___---------___.
     .  .   .    .  :.:. _".^ .^ ^.  '.. :"-_. .
  .  :       .  .  .:../:            . .^  :.:.
      .   . :: +. :.:/: .   .    .        . . .:
.  :    .     . _ :::/:               .  ^ .  . .:
.. . .   . - : :.:./.                        .  .:
.      .     . :..|:                    .  .  ^. .:|
  .       . : : ..||        .                . . !:|
.     . . . ::. ::(                           . :)/
.   .     : . : .:.|. ######              .#######::|
:.. .  :-  : .:  ::|.#######           ..########:|
.  .  .  ..  .  .. : ########          :######## :/
.        .+ :: : -.: ########       . ########.:/
  .  .+   . . . . :.:. #######       #######..:/
    :: . . . . ::.:..:.           .   .   ..:/
 .   .   .  .. :  -::::..       | |     . .:/
    .  :  .  .  .-:.":.::.             ..:/
.      -.   . . . .: .:::.:..           .:/
.   .   .  :      : ....::_:..:   ___.  :/
 .   .  .   .:. .. .  .: :.:.:       :/
   +   .   .   : . ::. :.:. .:.|    |/
   .         +   .  .  ...:: ..|    |
.      . . .   .  .  . ... :..:..|    |
.   .       .      :  .   .: ::/  .  .::`)

const setupLyrics = () => {
  const lyrics = [
    { lyric: 'OH!', time: 1 },
    { lyric: 'OH!', time: 1 },
    { lyric: 'OH!', time: 1 },
    { lyric: 'UHUUUUUUUUUU!', time: 2 },
    { lyric: 'SEXTOU', time: 5 },
    { lyric: 'SEUS ALIGENÍGENAS!', time: 2 },
    { lyric: 'UHUUUUUUUUUU!', time: 3 },
    { lyric: 'E JÁ DALE', time: 2 },
    { lyric: 'TOMA UM GOLEEE', time: 2 },
    { lyric: 'HAHAHAHAHAH', time: 2 },
    { lyric: 'QUEM QUE', time: 3 },
    { lyric: 'PAGA HOJEEE?', time: 1 },
    { lyric: 'UHUUUUUUUUUU!', time: 3 },
    { lyric: 'SÓ PELO', time: 3 },
    { lyric: 'CONVITE', time: 1 },
    { lyric: 'SEUS', time: 2 },
    { lyric: 'DIABÓLICO', time: 1 },
    { lyric: 'HAHAHAHAHAH', time: 2 }
  ]
  let time = 0
  
  lyrics.map((fragment) => {
    time += fragment.time * 500
    setTimeout(() => console.log(fragment.lyric), time)
  })
}

const sextou = async () => {
  const windowsCommand = `${mainPath} ./forWindows.vbs ${soundPath}.mp3`
  const linuxCommand = `paplay ${soundPath}.ogg`
  const macCommand = `afplay ${soundPath}.mp3`

  const platform = process.platform

  drawAlien()
  setupLyrics()
  switch (platform) {
    case 'linux':
      return exec(linuxCommand)
    case 'win32':
      return exec(windowsCommand)
    case 'darwin':
      return exec(macCommand)
  }


}

module.exports = sextou;

if (!module.parent) {
    sextou();
}
