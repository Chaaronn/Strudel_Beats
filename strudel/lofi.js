// "LOFI"

let chords = chord("<Dm7 G7>/2").dict('ireal')

let background = chords.offset(-1).voicing().s("gm_epiano1:1")
  .phaser(4).room(.5)

let bass = n("<0 <1*2 [5 1]>>").set(chords).mode("root:g2")
  .voicing().s("gm_acoustic_bass")
  .gain(0.9)

let melody = chords.n("[0 <~ 3 <2 1>>*2]")
  .anchor("D5").voicing().segment(4).gain(1.5).s("gm_electric_guitar_muted:0").phaser(0).room(.75)

$: stack(background, bass, melody)

let drums = s("bd sd [bd bd] sd").bank("RolandTR808").gain(".7,.8")
let hats = s("<hh*8>").bank("RolandTR808").gain(".3").decay(.1)

$: stack(drums, hats).gain(0.9).swing(4)._scope()
