def countDownRecursion(i, store):
    store.append(i)
    if i <= 0:
        return
    else:
        countDownRecursion(i - 1, store)
    return store

def sumFunction(list):
    if list == []:
        return 0
    return list[0] + sumFunction(list[1:])

def countList(list):
    if list == []:
        return 0
    return 1 + countList(list[1:])

def maxNumber(list):
    if len(list) == 2:
        return list[0] if list[0] > list[1] else list[1]
    sub_max = maxNumber(list[1:])
    return list[0] if list[0] > sub_max else sub_max


def test_countDownRecursion():
    testList = []
    assert countDownRecursion(4, testList) == [4, 3, 2, 1, 0]

def test_sumFunction():
    assert sumFunction([1, 2, 3, 4, 5 ]) == 15
    assert sumFunction([1, 2]) == 3
    assert sumFunction([]) == 0

def test_countList():
    assert countList([1, 2, 3, 4, 5]) == 5
    assert countList([]) == 0
    assert countList([1, 2]) == 2

def test_maxNumber():
    assert maxNumber([1, 2, 3, 4, 5]) == 5
    assert maxNumber([20, 19, 45, 6]) == 45
    assert maxNumber([1, 6]) == 6

