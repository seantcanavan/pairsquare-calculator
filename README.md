Trying to solve finding the highest product in O(N) time for an unsorted array of numbers.

Test output:

```
/home/userhome/.deno/bin/deno test --allow-net /home/userhome/code/github.com/seantcanavan/aavia-interview/main_test.ts
running 3 tests from ./main_test.ts
test SliceSquarePair ...
  test empty array ... ok (0ms)
  test array of 1 value ... ok (0ms)
  test array of 2 positive values ... ok (0ms)
  test array of 2 positive values ... ok (0ms)
  test array of 2 positive 1 negative 1 zero value ... ok (0ms)
test SliceSquarePair ... ok (1ms)
test CalculateProduct ...
  test array of 2 positive values ... ok (0ms)
  test array of 3 positive values ... ok (0ms)
  test array of 3 positive values and 1 zero ... ok (0ms)
  test array of 2 negative values ... ok (0ms)
  test array of 3 negative values ... ok (0ms)
  test array of 3 negative values and 1 zero ... ok (0ms)
  test one positive one negative ... ok (0ms)
  test one positive one zero ... ok (0ms)
  test one negative one zero ... ok (0ms)
  test one positive one negative one zero ... ok (0ms)
  test 10 positive, 10 negative, 10 zeros ... ok (0ms)
  test 10 zeros ... ok (0ms)
  test 2 zeros ... ok (0ms)
  test 2 sets of positive and negative values of the same magnitude ... ok (0ms)
test CalculateProduct ... ok (1ms)
test known cases ...
  test known case 1 - [10, 10] ... ok (0ms)
  test known case 2 - [-10, 10] ... ok (0ms)
  test known case 3 - [-10, -10] ... ok (0ms)
  test known case 4 - [-10, 1, 10] ... ok (0ms)
  test known case 4 - [-10, -1, 10] ... ok (0ms)
  test known case 5 - [-10, -2, 10, 2, -3] ... ok (0ms)
  test known case 6 - [-10, -3, -2, 2, 10] ... ok (1ms)
  test known case 7 - [-10, 0, 10, 0] ... ok (0ms)
  test known case 8 - [0, 0, 0, 0] ... ok (0ms)
test known cases ... ok (0ms)

ok | 3 passed (28 steps) | 0 failed (3ms)


Process finished with exit code 0
```
