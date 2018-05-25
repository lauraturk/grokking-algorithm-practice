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

