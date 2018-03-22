function nbYear(p0, percent, aug, p) {
var years = 0;
percent = percent * .01 + 1;
while (p0 < p) {
p0 = p0 * percent + aug;
years++;
  }
  return years;
}