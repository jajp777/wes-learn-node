const mongoose = require('mongoose');
const Review = mongoose.model('Review');

exports.addReview = async (req, res) => {
    req.body.author = req.user._id;
    req.body.store = req.params.id;
    const newReview = new Review(req.body);
    await newReview.save();
    req.flash('success', 'Review Saved');
    //res.json(req.body);
    res.redirect('back');
}