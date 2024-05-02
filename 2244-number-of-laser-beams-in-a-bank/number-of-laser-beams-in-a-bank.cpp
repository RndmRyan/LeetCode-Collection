using namespace std;

class Solution {
public:
    int numberOfBeams(vector<string>& bank) 
    {
        vector<int> devices;    

        for (int i = 0; i < bank.size(); i++)
        {
            int count = 0;
            for (char c : bank[i])
                if (c == '1')
                    count++;
            if (count>0)
                devices.push_back(count);
        }

        int beams = 0;
        if(devices.empty())
            return beams;
        for (int i = 0; i < devices.size()-1; i++)
            beams += devices[i]*(devices[i+1]);
        return beams;
    }
};