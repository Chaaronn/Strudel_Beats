let chords = chord("<Bbm9 Fm9>/2").dict('ireal')

let background = chords.offset(-1).voicing().s("gm_epiano1:1")
  .phaser(4).room(.5)

$: background

let drums = s("bd sd [bd bd] sd").bank("RolandTR808").gain(".7,.8")
let hats = s("hh*8").bank("RolandTR808").gain(".3").decay(.1)

$: stack(drums, hats).gain(0.9).swing(4)._scope()
// test

//let melody = n("<0!3 1*2>").set(chords).mode("root:g2")
  //.voicing().s("gm_acoustic_bass"),
  //chords.n("[0 <4 3 <2 5>>*2](<3 5>,8)")
  //.anchor("D5").voicing()