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
    "LEADER"
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
            clan : this.props.logo
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


    setRarity(val){
       
            this.props.setRarity(val);
        
    }

    handleRarity(event){
        if (this.state.clan === "LEADER")
            this.setRarity("leader");
        else
            this.setRarity(event.target.value);
    }

    setLogo(val){
        this.props.setLogo(val);
    }

    handleLogo(event){
        if (event.target.value === "LEADER")
        {
            this.props.setRarity("leader")
        }
        else
        {
            if(this.state.rarity === "leader")
                this.props.setRarity("c")
            else
                this.props.setRarity(this.state.rarity)

        }

        this.setLogo(event.target.value);
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
                        <input type="checkbox" disabled onChange={this.handlePrismatic} name="prismatic"/>
                    </div>

                    <div className="form-box">
                        <ImgFileUpload setImg={this.props.setImg}/>
                    </div>

                </div>

    

            </div>
        );
    }
}

export default Editor;