<h1> Chartmaker </h1>

This is a tool for musicians (or whomever, really) to build, edit, view, and transpose charts. Save functionality is forthcoming, so be patient.

[You can pilot a beta version of the app hosted on Heroku here.](https://chart-maker.herokuapp.com)

<h2> First: </h2>

Choose your key. Do this from the circle on the top left of the screen.

Seriously. Figure out what key your song is in. If it's in a minor key, use the relative major or just the associated minor root (eg. key of Am you can use "C" or "A"). 

If you're not sure, check the first and last chord of the song. If they're the same, there's a 99% chance the song key is that chord. If they are not the same, listen for whatever chord sounds like "home" harmonically in the song. Wherever the song seems to "rest". Worst case, ask someone with some training in diatonic chord theory.

Choosing the right key now ensures your transpositions are accurate later.

<h2> Next: </h2>
(in no particular order)

Enter the chart information at the top. This includes the names of the song, composer, and arranger (that's you!).

Click **ADD SECTION** (or keyboard shortcut 'shift-enter') to create a blank section of name 'Chorus'. You can do this again at any time from 'Edit' mode.

<h2> So You've Got Some Sections </h2>

Now what? Add some measures, my person, by clicking the **ADD MEASURE** button. You can also move the section Up/Down or remove it entirely from the section toolbar.

Each measure comes default with 4 beats. Sorry non-duple metres – you're not supported yet (also forthcoming, worry not). Each beat has room for a chord. Click a beat to edit its contents. You can navigate through beats in a measure/section with the arrow keys and tab. Hit enter when you're done entering chords.

<h2> My chart is pretty much built, I think. What's next? </h2>

Check your details, amigo. There's a multiplier option for each section if it repeats. Make sure your section names are accurate – ex. Verse 1, Verse (Instrumental), Intro, Outro, Coda, Bridge, Chorus, Interlude, Jam, Breakdown, etc.

You can toggle between **SHOW** and **EDIT** modes with a button in the top right, or with keyboard-shortcut '`'. Show mode is  a work in progress, but it is meant to remove extraneous material from the chart for printing/saving/use-offline.

<h2> You Mentioned Transposition? </h2>

Yes! Once you have chords in the beat-boxes, selecting a new key from the top-left key-menu will automatically transpose your entire chart to the newly selected key. 17 different keys are currently supported. Chartmaker will automatically capitalize the first letter input to a beat-box, but make sure you use valid roots if you want the transposition to work! ex. C7/e would wrongly go to D7/e, whereas C7/E would correctly go to D7/F#.

<h2> Anything else? </h2>

I've mentioned that saving and non-duple metre support is forthcoming, and it is. So there's that.

You needn't hit 'Enter' to change a chord, it will automatically become whatever you have input with your keyboard.

If you're having trouble removing a chord, try inputting ' ' (a blank space) before pressing Left/Right/Up/Down/Enter/Tab or clicking away.

Measure can be deleted with the **X** button beneath each one. That should be obvious, but here it is mentioned explicitly.

There are some keyboard shortcuts!

Shift-Enter: 	Add new section

`: 				Toggle EDIT/SHOW mode

ArrowKeys:		Move between beats while one is selected OR
				Move between chart information (name, composer, arranger) when one is selected

Tab:			Move to the first beat of the next measure when a beat is selected OR
					Move to the next piece of chart information if one is selected

<!-- <h2> Demo </h2>

Let's do a quick example with Santeria by Sublime. I think it was written in E so I'm going to write it in E. If it turns out I'm wrong (or some horn player in a cover-band can't stomach the key), the chart is always transposable!

![alt text](https://github.com/BenGoldstein88/redux-chartmaker/blob/master/src/assets/images/chartdemo.gif) -->

