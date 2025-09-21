import React from "react";
import ReactDOM from "react-dom";
import ImageUploader from "react-images-upload";


const arr_logo = [
    "ALLSTARS",
    "BANGERS",
    "BERZERK",
    "COSMOHNUTS",
    "DOMINION",
    "FANGPICLANG",
    "FREAKS",
    "FROZN",
    "GHEIST",
    "GHOSTOWN",
    "HIVE",
    "HURACAN",
    "JUNGO",
    "JUNKZ",
    "KOMBOKA",
    "NIGHTMARE",
    "PARADOX",
    "PIRANAS",
    "PUSSYCATS",
    "RAPTORS",
    "RESCUE",
    "RIOTS",
    "ROOTS",
    "SAKROHM",
    "SENTINEL",
    "SKEELZ",
    "ULUWATU",
    "UPPERS",
    "VORTEX",
    "OBLIVION",
    "ZENITH",
    "LEADER",
    "OCULUS"
    ];


class ImgFileUpload extends React.Component {
        constructor(props) {
          super(props);
          this.state = { pictures: "" };
          this.onDrop = this.onDrop.bind(this);

        }

        onDrop(pictureFiles, pictureDataURLs) {
          this.setState({
            pictures: pictureDataURLs
          });
          this.props.setImg(pictureDataURLs);
        }

        render() {
          return (
            <ImageUploader
              withIcon={true}
              buttonText="Choose image"
              onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
              singleImage={true}
            />
          );
        }
      }

class Editor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: '',
            name: this.props.name,
            power: this.props.power,
            ability: this.props.ability,
            damage: this.props.damage,
            bonus: this.props.bonus,
            lvl: this.props.lvl,
            rarity: this.props.rarity,
            clan : this.props.logo,
            imageSize: this.props.imageSize,
            image: this.props.image,
            top: this.props.top,
            left: this.props.left,
            lastNormalRarity: this.props.rarity || "c"
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleAbility = this.handleAbility.bind(this);
        this.handleBonus = this.handleBonus.bind(this);
        this.handleLvl = this.handleLvl.bind(this);
        this.handlePower= this.handlePower.bind(this);
        this.handleDamage = this.handleDamage.bind(this);
        this.handleRarity = this.handleRarity.bind(this);
        this.handleLogo = this.handleLogo.bind(this);
        this.handlePrismatic = this.handlePrismatic.bind(this);
        this.handleImageSize = this.handleImageSize.bind(this);
        this.openAi = this.openAi.bind(this);
        this.handleImg = this.handleImg.bind(this);
        /*this.handleImage = this.handleImage.bind(this);
        this.handleTop = this.handleTop.bind(this);
        this.handleLeft = this.handleLeft.bind(this);*/
    }

    /*

    setTop(val){
      this.props.setTop(val);
    }

    setLeft(val){
      this.props.setTop(val);
    }*/

    handleImg(event){
      this.props.setImg(event.target.value)
    }


    setImageSize(val){
      this.props.setImageSize(val);
    }

    handleImageSize(event){
      this.setImageSize(event.target.value)
    }



    setName(val){
        this.props.setNameCard(val);
    }

    handleChangeName(event) {
        this.setName(event.target.value);
    }

    setAbility(val){
        this.props.setAbility(val);
    }

    handleAbility(event){
        this.setAbility(event.target.value);
    }


    setBonus(val){
        this.props.setBonus(val);
    }

    handleBonus(event){
        this.setBonus(event.target.value);
    }

    setLvl(val){
        this.props.setLvl(val);
    }

    handleLvl(event){
        let val0 = event.target.value
        if (event.target.value > 5){
            val0 = 5;
        }

        if (event.target.value < 2)
            val0 = 2;
        this.setLvl(val0);
    }

    setPower(val){
        this.props.setPower(val);
    }

    handlePower(event){
        let val0 = event.target.value;
        if (event.target.value > 9){
            val0 = 9;
        }

        if (event.target.value < 1)
            val0 = 1;
        this.setPower(val0);
    }


    setDamage(val){
        this.props.setDamage(val);
    }

    handleDamage(event){
        let val0 = event.target.value;
        if (event.target.value > 9){
            val0 = 9;
        }

        if (event.target.value < 1)
            val0 = 1;
        this.setDamage(val0);
    }


    setRarity(val)
    {
        this.props.setRarity(val);
    }

    handleRarity(event) {
  const val = event.target.value; // peut être 'c','u','r','cr','m','l' ou 'leader'/'oculus'
  const currentClan = this.props.clan || this.state.clan;

  // Cas spécial : user choisit la rareté spéciale -> forcer clan spécial
  if (val === 'leader') {
    // sauvegarde si nécessaire
    if (!['leader','oculus'].includes(this.state.lastNormalRarity)) {
      this.setState({ lastNormalRarity: this.props.rarity || this.state.rarity });
    }
    this.setLogo('LEADER');
    this.setRarity('leader');
    return;
  }
  if (val === 'oculus') {
    if (!['leader','oculus'].includes(this.state.lastNormalRarity)) {
      this.setState({ lastNormalRarity: this.props.rarity || this.state.rarity });
    }
    this.setLogo('OCULUS');
    this.setRarity('oculus');
    return;
  }

  // Rareté normale choisie :
  // - si on est actuellement sur un clan spécial, on enregistre la rareté souhaitée
  //   mais on ne l'applique pas (pour que le background spécial reste tant qu'on est sur LEADER/OCULUS)
  if (currentClan === 'LEADER' || currentClan === 'OCULUS') {
    this.setState({ lastNormalRarity: val }); // on mémorise uniquement
    return;
  }

  // cas normal : appliquer la rareté tout de suite
  this.setState({ lastNormalRarity: val });
  this.setRarity(val);
}


    setLogo(val){
        this.props.setLogo(val);
    }



    handleLogo(event) {
  const val = event.target.value; // ex: "BANGERS", "LEADER", "OCULUS"
  
  // Si on choisit clan spécial -> sauvegarder la rareté normale et forcer la spéciale
  if (val === 'LEADER') {
    if (!['leader','oculus'].includes(this.state.lastNormalRarity)) {
      this.setState({ lastNormalRarity: this.props.rarity || this.state.rarity });
    }
    this.setLogo('LEADER');
    this.setRarity('leader');
    return;
  }
  if (val === 'OCULUS') {
    if (!['leader','oculus'].includes(this.state.lastNormalRarity)) {
      this.setState({ lastNormalRarity: this.props.rarity || this.state.rarity });
    }
    this.setLogo('OCULUS');
    this.setRarity('oculus');
    return;
  }

  // Clan normal sélectionné -> on restaure la rareté mémorisée (lastNormalRarity)
  this.setLogo(val);
  const restore = this.state.lastNormalRarity || this.props.rarity || 'c';
  this.setRarity(restore);
  // on peut garder lastNormalRarity inchangé ou la remettre à null si tu veux
  // this.setState({ lastNormalRarity: restore });
}



    setPrismatic(val){
        this.props.setPrismatic(val);
    }

    handlePrismatic(event){
            this.setPrismatic(event.target.value);
    }


    openAi(){
    }

    render(){

        let arr = [];
            for (let index = 0; index < arr_logo.length; index++) {
                arr.push(<div key={index}><img src={`https://s.acdn.ur-img.com/urimages/clan/${arr_logo[index]}_42.png`}/><input type="radio" name="logo" value={arr_logo[index]} onChange={this.handleLogo}/></div>);
            }
        return (
            <div id="editor">

                <div className="flex-left">

                    <div className="form-box">
                        <label htmlFor=""> Clan</label>
                        <div className="LogoForm">
                            {arr}
                        </div>
                    </div>




                    <div className="form-box">
                    <label htmlFor=""> Rarity</label>
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-rarity-c.png"/>
                        <input type="radio" onChange={this.handleRarity} name="rare" value="c"/>
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-rarity-u.png"/>
                        <input type="radio" onChange={this.handleRarity} name="rare" value="u"/>
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-rarity-r.png"/>
                        <input type="radio" onChange={this.handleRarity} name="rare" value="r"/>
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-rarity-cr.png"/>
                        <input type="radio" onChange={this.handleRarity} name="rare" value="cr"/>
                        
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-rarity-l.png"/>
                        <input type="radio" onChange={this.handleRarity} name="rare" value="l"/>
                    </div>



                    <div className="form-box">
                         <label htmlFor=""> Card Name</label>

                        <input placeholder={this.props.name} onChange={this.handleChangeName} type="text"/>
                    </div>



                    <div className="form-box">
                        <label htmlFor=""> Ability</label>

                        <input placeholder={this.props.ability} onChange={this.handleAbility} type="text"/>
                    </div>

                    <div className="form-box">
                         <label htmlFor=""> Bonus</label>

                        <input placeholder={this.props.bonus} onChange={this.handleBonus} type="text"/>
                    </div>

                    <div className="form-box" >
                    <label htmlFor=""> Image size </label>

                        <input type="range" onChange={this.handleImageSize} min="0" max="200" name="imagesize"/>
                    </div>


                </div>

                <div className="flex-right">




                    <div className="form-box">
                         <label htmlFor=""> Level</label>
                        <input placeholder={this.props.lvl} onChange={this.handleLvl} type="number" max={5} min={2}/>
                    </div>




                    <div className="form-box">
                        <label htmlFor=""> Power</label>
                        <input placeholder={this.props.power} onChange={this.handlePower} type="number" max={9} min={1}/>
                    </div>


                    <div className="form-box">
                        <label htmlFor=""> Damage</label>
                        <input placeholder={this.props.damage} onChange={this.handleDamage} type="number" max={9} min={1}/>
                    </div>


                    <div className="form-box" style={{'cursor':'not-allowed'}}>
                    <label htmlFor=""> Prismatic (None Collector) </label>
                        <label>None
                        <input type="radio" value="" onChange={this.handlePrismatic} name="prismatic"/></label>
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-prismatic.png"/>
                        <input type="radio" value="p" onChange={this.handlePrismatic} name="prismatic"/>
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-s.png"/>
                        <input type="radio" value="s" onChange={this.handlePrismatic} name="prismatic"/>
                    </div>
                    <div className="form-box" style={{'cursor':'not-allowed'}}>
                        <label htmlFor=""> Prismatic Collector</label>
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-m1.png"/>
                        <input type="radio" onChange={this.handlePrismatic} name="prismatic" value="m1"/>
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-gs.png"/>
                        <input type="radio" onChange={this.handlePrismatic} name="prismatic" value="gs"/>
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-ga.png"/>
                        <input type="radio" onChange={this.handlePrismatic} name="prismatic" value="ga"/>
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-m2.png"/>
                        <input type="radio" onChange={this.handlePrismatic} name="prismatic" value="m2"/>
                        <img height="25" src="https://s.acdn.ur-img.com/img/v3/collection/icon-m3.png"/>
                        <input type="radio" onChange={this.handlePrismatic} name="prismatic" value="m3"/>
                    </div>

                    <div className="form-box">
                        <ImgFileUpload setImg={this.props.setImg}/>
                        <input type="text" onChange={this.handleImg} name="img" placeholder="Or Paste Image Url here"/>


                    </div>

                </div>



            </div>
        );
    }
}

export default Editor;
