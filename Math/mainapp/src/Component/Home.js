import React, { useState, useEffect } from 'react';
import './Home.css'
export function Home(){
    const [state, setState] = React.useState( {
        id: '',
        idValid: false,

        password: '',
        passwordValid: false,

        name: '',
        nameValid: false,

        address: '',
        addressValid: false,

        country: '',
        countryValid: false,

        zip: '',
        zipValid: false,

        email: '',
        emailValid: false,

        sex: '',
        sexValid: false,

        language: '',
        languageValid: false,

        about: '',
        aboutValid: false
    });

    function validateId(id){
        return id.length > 5 && id.length < 7;
    }
    function validatePassword(password){
        return password.length > 7 && password.length < 12
    }
    function validateName(name) {
        return name.trim().length >= 2;
    }

    function validateAddress(address) {
        return address.trim().length >= 5;
    }

    function validateCountry(country) {
        return country !== '';
    }

    function validateZip(zip) {
        return /^\d{5}(-\d{4})?$/.test(zip); 
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateSex(sex) {
        return sex === 'male' || sex === 'female'; 
    }

    function validateLanguage(language) {
        return language !== ''; 
    }

    function validateAbout(about) {
        return about.trim().length >= 10;
    }

    function onIdChange(e) {
        const val = e.target.value;
        const valid = validateId(val);
        setState(prev => ({ ...prev, id: val, idValid: valid }));
    }

    function onPasswordChange(e) {
        const val = e.target.value;
        const valid = validatePassword(val);
        setState(prev => ({ ...prev, password: val, passwordValid: valid }));
    }

    function onNameChange(e) {
        const val = e.target.value;
        const valid = validateName(val);
        setState(prev => ({ ...prev, name: val, nameValid: valid }));
    }

    function onAddressChange(e) {
        const val = e.target.value;
        const valid = validateAddress(val);
        setState(prev => ({ ...prev, address: val, addressValid: valid }));
    }

    function onCountryChange(e) {
        const val = e.target.value;
        const valid = validateCountry(val);
        setState(prev => ({ ...prev, country: val, countryValid: valid }));
    }

    function onZipChange(e) {
        const val = e.target.value;
        const valid = validateZip(val);
        setState(prev => ({ ...prev, zip: val, zipValid: valid }));
    }

    function onEmailChange(e) {
        const val = e.target.value;
        const valid = validateEmail(val);
        setState(prev => ({ ...prev, email: val, emailValid: valid }));
    }

    function onSexChange(e) {
        const val = e.target.value;
        const valid = validateSex(val);
        setState(prev => ({ ...prev, sex: val, sexValid: valid }));
    }

    function onLanguageChange(e) {
        const val = e.target.value;
        const valid = validateLanguage(val);
        setState(prev => ({ ...prev, language: val, languageValid: valid }));
    }

    function onAboutChange(e) {
        const val = e.target.value;
        const valid = validateAbout(val);
        setState(prev => ({ ...prev, about: val, aboutValid: valid }));
    }

    function handleSubmit(e){
        if (
            state.idValid &&
            state.passwordValid &&
            state.nameValid &&
            state.addressValid &&
            state.countryValid &&
            state.zipValid &&
            state.emailValid &&
            state.sexValid &&
            state.languageValid &&
            state.aboutValid
        ) {
            console.log("Усі поля валідні. Відправка форми...");
        } else {
            console.log("Деякі поля невірно заповнені.");
        }
    }


    var id = state.idValid === true ? "valid" : "invalid";
    var password = state.passwordValid === true ? "valid" : "invalid";
    var name = state.nameValid === true ? "valid" : "invalid";
    var address = state.addressValid === true ? "valid" : "invalid";
    var country = state.countryValid === true ? "valid" : "invalid";
    var zip = state.zipValid === true ? "valid" : "invalid";
    var email = state.emailValid === true ? "valid" : "invalid";
    var sex = state.sexValid === true ? "valid" : "invalid";
    var language = state.languageValid === true ? "valid" : "invalid";
    var about = state.aboutValid === true ? "valid" : "invalid";

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Id (5-7 chars): </label>
                <input id="id" onChange={onIdChange} value={state.id} className={id} />
            </p>

            <p>
                <label>Password (8-12 chars): </label>
                <input
                id="password"
                type="password"
                onChange={onPasswordChange}
                value={state.password}
                className={password}
                />
            </p>

            <p>
                <label>Name: </label>
                <input
                id="name"
                onChange={onNameChange}
                value={state.name}
                className={name}
                />
            </p>

            <p>
                <label>Address: </label>
                <input
                id="address"
                onChange={onAddressChange}
                value={state.address}
                className={address}
                />
            </p>

            <p>
                <label>Country: </label>
                <input
                id="country"
                onChange={onCountryChange}
                value={state.country}
                className={country}
                />
            </p>

            <p>
                <label>ZIP: </label>
                <input
                id="zip"
                onChange={onZipChange}
                value={state.zip}
                className={zip}
                />
            </p>

            <p>
                <label>Email: </label>
                <input
                id="email"
                type="email"
                onChange={onEmailChange}
                value={state.email}
                className={email}
                />
            </p>

            <p>
                <label>Sex (male/female): </label>
                <input
                type="radio"
                name="sex"
                value="male"
                checked={state.sex === "male"}
                onChange={onSexChange}
                className={sex}
                />
                Male

                
                <input
                type="radio"
                name="sex"
                value="female"
                checked={state.sex === "female"}
                onChange={onSexChange}
                className={sex}
                />
                Female
                
            </p>

            <p>
                <label>Language: </label>
                <input
                id="language"
                onChange={onLanguageChange}
                value={state.language}
                className={language}
                />
            </p>

            <p>
                <label>About: </label>
                <textarea
                id="about"
                onChange={onAboutChange}
                value={state.about}
                className={about}
                />
            </p>

            <button type="submit">Submit</button>
        </form>
    );
}