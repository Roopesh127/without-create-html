def maximumEvenNumberSubstring(s):
max_even = ""
current_substring = ""

for char in s:
    if char.isdigit():
        current_substring += char
if int(current_substring) % 2 == 0 and int(current_substring) > int(max_even):
max_even = current_substring
        else:
current_substring = ""

return max_even


input_str = "63"
result = maximumEvenNumberSubstring(input_str)
print(result)  # Output: "6"
