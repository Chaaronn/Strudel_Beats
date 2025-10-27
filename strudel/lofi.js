// "LOFI"

// --- tempo ---


// --- PER-SECTION CHORDS ---
// Verse: ii–V in D minor
let verseCh = chord("<Dm7 G7>/2").dict('ireal')

// Chorus: warm lift, then back to Dm7→G7
let chorusCh = chord("<Bbmaj7 Am7 Dm7 G7>/2").dict('ireal')

// Break: airy variation
let breakCh = chord("<Dm9 ~ G7sus4 G7>/2").dict('ireal')


// --- FULL-FORM CHORDS (8-bar Verse, 8-bar Chorus, 4-bar Break) ---
let formCh = arrange([8, verseCh], [8, chorusCh], [4, breakCh])

// --- INSTRUMENT BUILDERS (parametric on chords) ---
let mkBG  = (ch) => ch.offset(-1).voicing().s("gm_epiano1:1").phaser(4).room(.75)
let mkBass= (ch) => n("<0 <1*2 [5 1]>>").set(ch).mode("root:g2").voicing().s("gm_acoustic_bass").gain(0.9)
let mkMel = (ch) => ch.n("0 <~ 3 <2 1>>*4").anchor("D5").voicing().segment(4).gain(1.5)
                  .s("gm_electric_guitar_muted:0").phaser(0).room(.75)

// --- SECTION VARIANTS (optional extra flavour per section) ---
let verseBG   = mkBG(verseCh).gain(0.85)
let verseBass = mkBass(verseCh)
let verseMel  = mkMel(verseCh).slow(2).gain(1.2)

let chorusBG   = mkBG(chorusCh).gain(1.0)
let chorusBass = mkBass(chorusCh).legato(1.1).gain(1.0)
let chorusMel  = mkMel(chorusCh).fast(2).gain(1.6).delay(".25").delayfb(0.35)

let breakBG   = mkBG(breakCh).degradeBy(0.15).gain(0.95)
let breakBass = mkBass(breakCh).degradeBy(0.3).gain(0.8)
let breakMel  = "~"  // space in the break

// --- GLUE THE SECTIONS FOR EACH PART ---
let formBG   = arrange([8, verseBG],   [8, chorusBG],  [4, breakBG])
let formBass = arrange([8, verseBass], [8, chorusBass],[8, breakBass])
let formMel  = arrange([8, verseMel],  [8, chorusMel], [4, breakMel])

// --- DRUMS (unchanged form, but you can vary per section the same way) ---
let verseDrums = s("bd sd <~ [~ bd]> sd").bank("RolandTR808").gain(".6,.7")
let verseHats  = s("hh*4").bank("RolandTR808").gain(".25").decay(.12)

let chorusDrums = s("bd sd <[bd bd] [~ bd]> sd").bank("RolandTR808").gain(".75,.85")
let chorusHats  = s("<hh*8>").bank("RolandTR808").gain(".35").decay(.1)

let breakDrums = s("bd ~ ~ ~").bank("RolandTR808").gain(.5)
let breakHats  = s("hh*2").bank("RolandTR808").gain(.2).decay(.08)

let formDrums = arrange([8, verseDrums],[8, chorusDrums],[4, breakDrums])
let formHats  = arrange([8, verseHats], [8, chorusHats], [4, breakHats])

// --- OUTPUT ---
$: stack(formBG, formBass, formMel)
$: stack(formDrums, formHats).gain(0.9).swing(4)._scope()
