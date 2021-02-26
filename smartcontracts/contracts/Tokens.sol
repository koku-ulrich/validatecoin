pragma solidity >=0.4.21 <0.7.0;

contract Immobilier {

    string public proprietaire;
    string public images;
    string public adresse;
    string public value;
    string public vente;

    constructor() public {
        proprietaire = "validateCoin";
    }

    function getProprietaire() public view returns(string memory) {
        return proprietaire;
    }

    function setProprietaire(string memory _proprietaire) public {
        proprietaire = _proprietaire;
    }

    function getVente() public view returns(string memory) {
        return vente;
    }

    function setVente(string memory _vente) public {
        vente = _vente;
    }

    function getAdresse() public view returns(string memory) {
        return adresse;
    }

    function setAdresse(string memory _adresse) public {
        adresse = _adresse;
    }

    function getImages() public view returns(string memory) {
        return images;
    }

    function setImages(string memory _images) public {
        images = _images;
    }

    function getValue() public view returns(string memory) {
        return value;
    }

    function setValue(string memory _value) public {
        value = _value;
    }
}
