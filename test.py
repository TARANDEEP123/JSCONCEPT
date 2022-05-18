import math


class Goodness:
    def __init__(self):
        pass

    def index(self, n, k, s):
        totalSteps = 0

        i = math.ceil(n/2)-1
        while i >=0:
            if s[i] != s[n-i-1]:
                k = k-1
                # totalSteps += 1
            else:
                if k > 0:
                    totalSteps += 1
                    k -= 1

            i -= 1
        return totalSteps


tc = int(input())
for t in range(tc):
    data = input().split()
    n = int(data[0])
    k = int(data[1])
    s = input()
    gc = Goodness()
    print("Case #{}: ".format(t+1), gc.index(n, k, s))
