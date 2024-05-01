class Solution {
public:
    int maxBottlesDrunk(int numBottles, int numExchange) 
    {
        int totaldrank = 0, empty = 0;
        while(true)
        {
            totaldrank += numBottles, empty += numBottles;
            numBottles = 0;

            if (empty < numExchange)
                break;

            while (empty >= numExchange)
            {
                empty -= numExchange;
                numBottles++;
                numExchange++;
            }
        }
        return totaldrank;
    }
};