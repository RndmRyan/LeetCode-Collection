class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        int totaldrank = numBottles, empty = numBottles;
        numBottles = 0;
        while (empty >= numExchange)
        {
            numBottles = empty/numExchange;
            empty %= numExchange;
            totaldrank += numBottles;
            empty += numBottles;
        }
        return totaldrank;
    }
};