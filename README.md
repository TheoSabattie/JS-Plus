# JS-Plus
More functions on basic and primitif object

*Array prototype:

```var lArray = ["hello", "hello", 1, 2, 3, "Thank", 2];```

```lArray.pushIfNotPresent(1);```

-> lArray -> ["hello", "hello", 1, 2, 3, "Thank", 2];

```lArray.pushIfNotPresent(10);```

-> lArray -> ["hello", "hello", 1, 2, 3, "Thank", 2, 10];

```lArray.hasValue(5)```

-> false

```lArray.countOf("hello")```

-> 2

```lArray.removeDuplicatedValues()```

-> lArray -> ["hello", 1, 2, 3, "Thank", 10];
