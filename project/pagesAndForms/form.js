
class Form {

    name;
    phone;
    company;
    email;
    comment

    constructor (fields) {
        this.name = fields["name"];
        this.phone = fields["phone"];
        this.company = fields["company"];
        this.email = fields["email"];
        this.comment = fields["comment"]
    }

}

module.exports = Form;