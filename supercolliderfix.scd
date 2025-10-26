// Pick a solid output device (stereo headphones/speakers, not "hands-free")
(
Server.killAll; // clean slate

s.options.numOutputBusChannels = 2;
s.options.sampleRate = 44100; // matches your Tidal default
// Optional: force a device by name if you need to
// s.options.outDevice_("Headphones (WH-1000XM4)"); // or "Speakers (Realtek(R) Audio)"

s.waitForBoot {
    ~dirt = SuperDirt(2, s);         // 2 audio channels
    ~dirt.loadSoundFiles;            // load Dirt-Samples
    ~dirt.start(57120);              // listen for Tidal on 57120
    ">>> SuperDirt started".postln;
};
)
