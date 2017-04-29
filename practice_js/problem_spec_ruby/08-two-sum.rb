# Write a method that takes an array of numbers. If a pair of numbers
# in the array sums to zero, return the positions of those two numbers.
# If no pair of numbers sums to zero, return `nil`.
#
# Difficulty: medium.

def two_sum(nums)
  hash = load_hash(nums)
  ans = []
  nums.each_with_index do |number,index|
    search_item = 0 - number
    if hash[search_item]
      return [index, nums.index(search_item)]
    end
  end
  return nil
  
end

def load_hash(nums)
  hash = nums.each_with_object({}) {|num, hash| hash[num] = true}
  return hash
end

# These are tests to check that your code is working. After writing
# your solution, they should all print true.

puts(
  'two_sum([1, 3, 5, -3]) == [1, 3]: ' + (two_sum([1, 3, 5, -3]) == [1, 3]).to_s
)
puts(
  'two_sum([1, 3, 5]) == nil: ' + (two_sum([1, 3, 5]) == nil).to_s
)
