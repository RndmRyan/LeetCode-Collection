class Solution:
    def intToRoman(self, num: int) -> str:
        roman = ""
        
        if num >= 1000:
            conv = num//1000
            for i in range(conv):
                roman += "M"
            num -= conv*1000        
        if num >= 900:
            num -= 900
            roman += "CM"
        if num >= 500:
            conv = num//500
            for i in range(conv):
                roman += "D"
            num -= conv*500           
        if num >= 400:
            num -= 400
            roman += "CD"
        if num >= 100:
            conv = num//100
            for i in range(conv):
                roman += "C"
            num -= conv*100        
        if num >= 90:
            num -= 90
            roman += "XC"
        if num >= 50:
            conv = num//50
            for i in range(conv):
                roman += "L"
            num -= conv*50     
        if num >= 40:
            num -= 40
            roman += "XL"
        if num >= 10:
            conv = num//10
            for i in range(conv):
                roman += "X"
            num -= conv*10     
        if num >= 9:
            num -= 9
            roman += "IX"
        if num >= 5:
            conv = num//5
            for i in range(conv):
                roman += "V"
            num -= conv*5     
        if num >= 4:
            num -= 4
            roman += "IV"
        if num > 0:
            for i in range(num):
                roman += "I"

        return roman
