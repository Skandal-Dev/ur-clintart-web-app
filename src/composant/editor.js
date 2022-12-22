import React from "react";
import ReactDOM from "react-dom";
import ImageUploader from "react-images-upload";

const arr_logo = [
    "ALLSTARS",
    "BANGERS",
    "BERZERK",
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
            left: this.props.left
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

    handleRarity(event){
        if ( event.target.value  === "leader" || event.target.value === "oculus")
        {
            this.handleLogo(event)
            this.setRarity(event.target.value);
        }
        else{
          this.setRarity(event.target.value);
          if (this.props.clan === "LEADER" || this.props.clan == "OCULUS"){
            this.setLogo("ALLSTARS");
          }
        }

    }

    setLogo(val){
        this.props.setLogo(val);
    }

    handleLogo(event){

        if (event.target.value === "oculus" || event.target.value === "leader" || this.props.clan === 'LEADER' || this.props.clan === 'OCULUS')
        {
            this.setLogo(event.target.value.toUpperCase())
            this.setRarity("c");
        }
        else{
            this.setLogo(event.target.value);
            this.setRarity('c')
        }

    }

    setPrismatic(val){
        this.props.setPrismatic(val);
    }

    handlePrismatic(event){
        if (event.target.checked)
            this.setPrismatic("prismatic");
        else
            this.setPrismatic("");

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
                        <img src="https://s.acdn.ur-img.com/img/v3/collection/icon-rarity-c.png"/>
                        <input type="radio" onChange={this.handleRarity} name="rare" value="c"/>
                        <img src="https://s.acdn.ur-img.com/img/v3/collection/icon-rarity-u.png"/>
                        <input type="radio" onChange={this.handleRarity} name="rare" value="u"/>
                        <img src="https://s.acdn.ur-img.com/img/v3/collection/icon-rarity-r.png"/>
                        <input type="radio" onChange={this.handleRarity} name="rare" value="r"/>
                        <img src="https://s.acdn.ur-img.com/img/v3/collection/icon-rarity-cr.png"/>
                        <input type="radio" onChange={this.handleRarity} name="rare" value="cr"/>
                        <img src="https://s.acdn.ur-img.com/img/v3/collection/icon-rarity-m.png"/>
                        <input type="radio" onChange={this.handleRarity} name="rare" value="m"/>
                        <img src="https://s.acdn.ur-img.com/img/v3/collection/icon-rarity-l.png"/>
                        <input type="radio" onChange={this.handleRarity} name="rare" value="l"/>
                        <img height="25" src={`https://s.acdn.ur-img.com/urimages/clan/OCULUS_42.png`}/><input type="radio" name="rare" value="oculus"  onChange={this.handleRarity}/>
                        <img height="25" src={`https://s.acdn.ur-img.com/urimages/clan/LEADER_42.png`}/><input type="radio" name="rare" value="leader"  onChange={this.handleRarity}/>
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
                    <label htmlFor=""> Prismatic </label>

                        <img src="https://s.acdn.ur-img.com/img/v3/collection/icon-prismatic.png"/>
                        <input type="checkbox" onChange={this.handlePrismatic} name="prismatic"/>
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
