const userDataBase = [
    {
        name: 'Rajendra Chaudhari',
        email : 'rajendra@gmail.com',
        gender : 'male',
        hobby: ['Sport', 'Gym'],
        country: 'India',
        state : 'Gujarat',
        city : 'Ankleshwar',
    },
    {
        name: 'Sammed Patil',
        email : 'patil@gmail.com',
        gender : 'male',
        hobby: ['Sport', 'Traveling'],
        country: 'India',
        state : 'Gujarat',
        city : 'Ankleshwar',
    },
]

function CreateUserDataObj(name, email, gender, hobby, country, state, city){
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.hobby= [...hobby];
    this.country = country;
    this.state  = state;
    this.city = city;
}
