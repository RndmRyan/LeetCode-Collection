#include <stack>

class Solution {
public:
    bool isValid(string s) {
        stack<char> brackets;

        for (int i = 0; i<s.length(); i++)
        {
            if (s[i] == '(' || s[i] == '[' || s[i] == '{')
                brackets.push(s[i]);
            else if (s[i] == ')' || s[i] == '}' || s[i] == ']')
            {
                if (brackets.empty()) return false; 
                else if (s[i] == ')' && brackets.top()!='(') return false; 
                else if (s[i] == '}' && brackets.top()!='{') return false;
                else if (s[i] == ']' && brackets.top()!='[') return false; 
                else brackets.pop();
            } 
        }
        return brackets.empty();
    }
};