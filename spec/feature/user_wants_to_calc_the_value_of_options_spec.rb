require 'rails_helper'

feature 'A User Wants To Calculate The Value Of An Option', %{
  As a User
  I would like to calculate the value of my option
  So that I can use that value to determine proper treatment
} do
  scenario 'User correctly enters necessary information to calc the value of an option' do
    visit root_path
    expect(page).to have_content "Black-Scholes Model Calculator"
    fill_in 'S', with: 23
    fill_in 'X', with: 40
    fill_in 'r', with: 0.0019
    fill_in 'T', with: 5
    fill_in 'v', with: 0.20
    click_on 'Calculate'

    expect(page).to have_content 'Your Calculated per option value:'
    # add in calculated value as an expectation
  end

end
