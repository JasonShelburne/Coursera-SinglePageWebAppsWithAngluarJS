# Coursera-SinglePageWebAppsWithAngluarJS
Module 1 Exercise Solution for the Coursera course Single Page Web Applications with AngularJS
I have added checking to allow for any combination of commas and whitespaces.
Only non-whitespace chars count as an item.
Thus any of these will count as <=3 items:
aa, bb,cc
a, bbb,c,,,
aa,,            ,,, ,,,,, ,bb,,,,,,,      ,,,,,,,,,,,,,,,,, ,,,,,,,, ,,,,,,cc,,,,   ,,,, ,,

These will count as <3:
aa, bb,cc,dd
a, bbb,c,,dd,
aa,,            ,,, ,,,,, ,bb,,,,,,,      ,,,,,,,,,,,,,,,,, ,,,,,,,, ,,,,,,cc,,,,   ,,,dd, ,,
