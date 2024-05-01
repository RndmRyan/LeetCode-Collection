class Solution {
public:
    int wateringPlants(vector<int>& plants, int capacity) 
    {
        int steps = 1, curcapacity = capacity;
        
        for (int i = 0; i < plants.size()-1; i++)
        {
            curcapacity -= plants[i];
            if (plants[i+1] > curcapacity)
            {
                curcapacity = capacity;
                steps += (i+1)*2;
            }
            steps++;
        }
        return steps;
    }
};