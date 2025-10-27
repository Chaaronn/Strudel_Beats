// "LOFI"

let chords = chord("<Bbm9 Fm9>/2").dict('ireal')

let background = chords.offset(-1).voicing().s("gm_epiano1:1")
  .phaser(4).room(.5)

let bass = n("<<0!3 1*2> 2!3 3*2>").set(chords).mode("root:g2")
  .voicing().s("gm_acoustic_bass")
  .gain(0.9)

$: stack(background, bass)

let drums = s("bd sd [bd bd] sd").bank("RolandTR808").gain(".7,.8")
let hats = s("hh*8").bank("RolandTR808").gain(".3").decay(.1)

$: stack(drums, hats).gain(0.9).swing(4)._scope()
