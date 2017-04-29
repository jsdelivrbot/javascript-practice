# Anagrams are two words with exactly the same letters. Order does not matter. Define a method that, given two strings, returns a boolean indicating whether they are anagrams.
def anagrams?(str1, str2)
    if str1.length != str2.length
        return false
    else
        return true if str1.split("").sort == str2.split("").sort
        return false
    end
end



