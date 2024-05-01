class Solution {
public:
    int maxBottlesDrunk(int numBottles, int numExchange) 
    {
        int empty = numBottles;

        while (empty >= numExchange)
        {
            empty -= numExchange;
            numBottles++;
            empty++;
            numExchange++;
        }

        return numBottles;
    }
};