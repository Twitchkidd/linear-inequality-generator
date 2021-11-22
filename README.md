# Linear Inequality Generator!

Good evening! We're going to see what could be, someone is getting `Internal error: undefined has no properties.` so let's see ...

Ok, so the object passed in, rand, has some methods, let's see if we can just reason through this without getting it to run, necessarily ...

- `n1` through `n6`, random numbers between -10 and 10
- What is `Num`? Line 23 ... oh, that is what's casting it to a fraction, got it
- `rand.prob()`? Okay, 0-1, and then ...
- Okay, we've got `sign` and `answer`, and a big ole if setting them to strings, then `question` ...
- `a` is being set to `answer.toString()`, but `answer` is already a string, what's up there?
- Okay, then `explanation`, and then the return ... `instruction` is a string, `question` and `explanation` can be returned with the shorthand, but that's no biggie, okay, and `[a]` is the array of answers, and then the answer type option

I dunno, homie, looks good to me, as long as you're confident on the math, the code looks fine, given `Num` and `rand` are in scope. Is `rand` not being passed in properly somehow, or is `Num` not in scope? Because those are the only two things where we're really clearly calling methods on them, that would look like properties in the error message. Lmk! ~g
