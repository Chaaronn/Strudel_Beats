setcps(91/60/4)
samples('github:eddyflux/crate')

let drums = stack(
  s("bd cp bd*2 <[~ bd] [bd bd]>").gain(0.9),
  s("~ ~ ~ cp").gain(0.8)
)._scope()

let piano = note("fs5@1 fs5@0.25 gs5@0.75 a5@1 b5@1 cs6@1 fs6@1 e6@0.25 fs6@0.25 e6@0.25 ds6@1.25 cs6@1 b5@1 a5@1.25 gs5@0.75 fs5@1 fs5@1 fs5@2")
  .s("gm_piano")
  .slow(2)
  .sustain(2)



let root = note("cs3")
  .s("gm_piano")
  .struct("x ~ ~ ~")                 // hit on beat 1 each bar
  .sustain(0.95)
  .gain(0.5)
  .cut(1)                            // stop previous chord when retriggered
  .clip(3.75)


let grace = note("[a3, fs3]")
  .s("gm_piano")
  .struct("x ~ ~ ~")
  .late(1/64)
  .sustain(0.6)
  .gain(0.5)

let piano2 = stack(root, grace)

$: piano.pianoroll()
$: drums
$: piano2
