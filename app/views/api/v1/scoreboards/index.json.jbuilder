json.array! @scores do |score|
    json.partial! 'score', score: score
end