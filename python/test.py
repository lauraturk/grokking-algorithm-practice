def countDownRecursion(i, store):
    store.append(i)
    if i <= 0:
        return
    else:
        countDownRecursion(i - 1, store)
    return store

def test_countDownRecursion():
    testList = []
    assert countDownRecursion(4, testList) == [4, 3, 2, 1, 0]

