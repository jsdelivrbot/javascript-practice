require 'spec_helper'
require_relative '../21-anagrams'


describe "The anagram function works properly" do
    
    it 'with senorita' do
        expect(anagrams?("senorita","notaries")).to eq(true)
    end
    
    it 'with excitation' do
        expect(anagrams?("excitation","intoxicate")).to eq(true)
    end
    
    it 'with precipitate' do
        expect(anagrams?("precipitate","peripatetic")).to eq(true)
    end
    
    it 'with for candy' do
        expect(anagrams?("candy","dandy")).to eq(false)
    end
    
    it 'with for booted' do
        expect(anagrams?("booted","tubed")).to eq(false)
    end
    
end