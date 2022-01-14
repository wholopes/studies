var shirtWidth=19.99
var shirtLength=28.99
var shirtSleeve=8.379

if ((shirtWidth < 20) && (shirtLength <= 28.99) && (shirtSleeve <= 8.379)) {
    console.log("S");
} else if ((shirtWidth>19 && shirtWidth<21) && (shirtLength==29) && (shirtSleeve >=8.38 && shirtSleeve< 8.63)) {
    console.log("M");
} else if ((shirtWidth>21 && shirtWidth<24) && (shirtLength==30) && (shirtSleeve >=8.63 && shirtSleeve< 8.88)) {
    console.log("L");
} else if ((shirtWidth>23 && shirtWidth<26) && (shirtLength==31) && (shirtSleeve >=8.88 && shirtSleeve< 9.63)) {
    console.log("XL");
} else if ((shirtWidth>25 && shirtWidth<28) && (shirtLength>31 && shirtLength<34) && (shirtSleeve >=9.63 && shirtSleeve< 10.13)) {
    console.log("2XL");
} else if ((shirtWidth>27 && shirtWidth<30) && (shirtLength>=34 && shirtLength<37) && (shirtSleeve >=10.13 && shirtSleeve< 10.63)) {
    console.log("3XL");
        } else {console.log("NA");
}
