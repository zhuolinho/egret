
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/skins/GuideSkin.exml'] = window.GuideSkin = (function (_super) {
	__extends(GuideSkin, _super);
	function GuideSkin() {
		_super.call(this);
		this.skinParts = ["btnClose0","btnClose1","btnClose2","btnClose3","grp_guides","btnPre","btnNext"];
		
		this.height = 1423;
		this.width = 800;
		this.elementsContent = [this.grp_guides_i(),this.btnPre_i(),this.btnNext_i()];
	}
	var _proto = GuideSkin.prototype;

	_proto.grp_guides_i = function () {
		var t = new eui.Group();
		this.grp_guides = t;
		t.bottom = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.width = 3200;
		t.x = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 132;
		t.elementsContent = [this._Image1_i(),this.btnClose0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleY = 1;
		t.source = "guide1_png";
		return t;
	};
	_proto.btnClose0_i = function () {
		var t = new eui.Group();
		this.btnClose0 = t;
		t.height = 68;
		t.width = 66;
		t.x = 454;
		t.y = 54;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.skewY = 180;
		t.source = "btn2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 932;
		t.elementsContent = [this._Image3_i(),this.btnClose1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "guide2_png";
		return t;
	};
	_proto.btnClose1_i = function () {
		var t = new eui.Group();
		this.btnClose1 = t;
		t.height = 68;
		t.width = 66;
		t.x = 454;
		t.y = 54;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.skewY = 180;
		t.source = "btn2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 1732;
		t.elementsContent = [this._Image5_i(),this.btnClose2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "guide3_png";
		return t;
	};
	_proto.btnClose2_i = function () {
		var t = new eui.Group();
		this.btnClose2 = t;
		t.height = 68;
		t.width = 66;
		t.x = 454;
		t.y = 54;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.skewY = 180;
		t.source = "btn2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 2532;
		t.elementsContent = [this._Image7_i(),this.btnClose3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "guide4_png";
		return t;
	};
	_proto.btnClose3_i = function () {
		var t = new eui.Group();
		this.btnClose3 = t;
		t.height = 68;
		t.width = 66;
		t.x = 454;
		t.y = 54;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.skewY = 180;
		t.source = "btn2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnPre_i = function () {
		var t = new eui.Group();
		this.btnPre = t;
		t.height = 186;
		t.left = -10;
		t.verticalCenter = -37;
		t.width = 155;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btn1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnNext_i = function () {
		var t = new eui.Group();
		this.btnNext = t;
		t.height = 186;
		t.right = -11;
		t.verticalCenter = -38;
		t.width = 155;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.skewY = 180;
		t.source = "btn1_png";
		t.verticalCenter = 0;
		return t;
	};
	return GuideSkin;
})(eui.Skin);generateEUI.paths['resource/skins/PlaySceneSkin.exml'] = window.PlaySceneSkin = (function (_super) {
	__extends(PlaySceneSkin, _super);
	function PlaySceneSkin() {
		_super.call(this);
		this.skinParts = ["groupStone","groupBonus","groupSnake","txtScore","txtCountdown","groupTitle0","imgTX0","imgMask0","groupTX0","imgTX1","imgMask1","groupTX1","groupTitle1","groupEffect"];
		
		this.height = 1423;
		this.width = 800;
		this.elementsContent = [this._Image1_i(),this.groupStone_i(),this.groupBonus_i(),this.groupSnake_i(),this.groupTitle0_i(),this.groupTitle1_i(),this.groupEffect_i()];
	}
	var _proto = PlaySceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(0,457,800,217);
		t.source = "tcs_ui_bg_01_jpg";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.groupStone_i = function () {
		var t = new eui.Group();
		this.groupStone = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.groupBonus_i = function () {
		var t = new eui.Group();
		this.groupBonus = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.groupSnake_i = function () {
		var t = new eui.Group();
		this.groupSnake = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.groupTitle0_i = function () {
		var t = new eui.Group();
		this.groupTitle0 = t;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 800;
		t.x = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Label1_i(),this.txtScore_i(),this.txtCountdown_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(60,13,22,59);
		t.source = "TCS_DK63_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.scale9Grid = new egret.Rectangle(20,18,22,18);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "biaoti_1_png";
		t.width = 228;
		t.x = 11;
		t.y = 17;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.scale9Grid = new egret.Rectangle(20,18,22,18);
		t.source = "biaoti_1_png";
		t.width = 332;
		t.x = 235;
		t.y = 17;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Tahoma";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "SCORE";
		t.x = 261;
		t.y = 43;
		return t;
	};
	_proto.txtScore_i = function () {
		var t = new eui.Label();
		this.txtScore = t;
		t.anchorOffsetX = 101.5;
		t.anchorOffsetY = 24;
		t.bold = true;
		t.fontFamily = "Arial";
		t.size = 48;
		t.stroke = 1;
		t.text = "194910";
		t.textAlign = "center";
		t.width = 189;
		t.x = 454;
		t.y = 57;
		return t;
	};
	_proto.txtCountdown_i = function () {
		var t = new eui.Label();
		this.txtCountdown = t;
		t.anchorOffsetX = 101.5;
		t.anchorOffsetY = 24;
		t.bold = true;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.stroke = 1;
		t.text = "2:30";
		t.textAlign = "center";
		t.width = 130;
		t.x = 190;
		t.y = 54;
		return t;
	};
	_proto.groupTitle1_i = function () {
		var t = new eui.Group();
		this.groupTitle1 = t;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 800;
		t.x = 0;
		t.elementsContent = [this._Image5_i(),this.groupTX0_i(),this.groupTX1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(59,13,12,82);
		t.source = "TCS_DK26_png";
		t.width = 550;
		t.x = 122;
		t.y = 0;
		return t;
	};
	_proto.groupTX0_i = function () {
		var t = new eui.Group();
		this.groupTX0 = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 72;
		t.x = 258;
		t.y = 75;
		t.elementsContent = [this.imgTX0_i(),this.imgMask0_i(),this._Image6_i()];
		return t;
	};
	_proto.imgTX0_i = function () {
		var t = new eui.Image();
		this.imgTX0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.source = "";
		t.width = 110;
		t.x = 9;
		t.y = 13;
		return t;
	};
	_proto.imgMask0_i = function () {
		var t = new eui.Image();
		this.imgMask0 = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.scale9Grid = new egret.Rectangle(1,4,20,17);
		t.source = "tcs_ui_bg_35_png";
		t.width = 110;
		t.x = 9;
		t.y = 15;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "tcs_ui_frame_17_png";
		t.x = 4;
		t.y = 10;
		return t;
	};
	_proto.groupTX1_i = function () {
		var t = new eui.Group();
		this.groupTX1 = t;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 73;
		t.x = 537;
		t.y = 76;
		t.elementsContent = [this.imgTX1_i(),this.imgMask1_i(),this._Image7_i()];
		return t;
	};
	_proto.imgTX1_i = function () {
		var t = new eui.Image();
		this.imgTX1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.source = "";
		t.width = 110;
		t.x = 9;
		t.y = 13;
		return t;
	};
	_proto.imgMask1_i = function () {
		var t = new eui.Image();
		this.imgMask1 = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.scale9Grid = new egret.Rectangle(1,4,20,17);
		t.source = "tcs_ui_bg_35_png";
		t.width = 110;
		t.x = 9;
		t.y = 15;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "tcs_ui_frame_17_png";
		t.x = 4;
		t.y = 10;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "VS";
		t.textColor = 0x7e5238;
		t.x = 368;
		t.y = 42;
		return t;
	};
	_proto.groupEffect_i = function () {
		var t = new eui.Group();
		this.groupEffect = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.15;
		t.scaleY = 0.15;
		t.source = "clock_png";
		t.x = 45;
		t.y = 37;
		return t;
	};
	return PlaySceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/ResultWindowSkin.exml'] = window.ResultWindowSkin = (function (_super) {
	__extends(ResultWindowSkin, _super);
	function ResultWindowSkin() {
		_super.call(this);
		this.skinParts = ["img_glow","grp_stars","btnContinue","txtScore"];
		
		this.height = 1423;
		this.width = 800;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ResultWindowSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 550;
		t.horizontalCenter = 0;
		t.verticalCenter = -100;
		t.width = 750;
		t.elementsContent = [this.img_glow_i(),this.grp_stars_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this.btnContinue_i(),this.txtScore_i(),this._Label2_i()];
		return t;
	};
	_proto.img_glow_i = function () {
		var t = new eui.Image();
		this.img_glow = t;
		t.anchorOffsetX = 463.5;
		t.anchorOffsetY = 463.5;
		t.source = "guang_1_png";
		t.x = 375.5;
		t.y = 100;
		return t;
	};
	_proto.grp_stars_i = function () {
		var t = new eui.Group();
		this.grp_stars = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 100;
		t.height = 200;
		t.width = 200;
		t.x = 375;
		t.y = 100;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 63.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xing_1_png";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 63.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xing_1_png";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 63.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xing_1_png";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 63.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xing_1_png";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 63.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xing_1_png";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 63.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xing_1_png";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 63.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xing_1_png";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 63.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xing_1_png";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 63.5;
		t.anchorOffsetY = 63.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xing_1_png";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 511;
		t.scale9Grid = new egret.Rectangle(22,47,37,50);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TCS_DK45_png";
		t.width = 750;
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "TCS_DK10_png";
		t.x = 87;
		t.y = 14;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "TCS_DK10_png";
		t.x = 667;
		t.y = 14;
		return t;
	};
	_proto.btnContinue_i = function () {
		var t = new eui.Group();
		this.btnContinue = t;
		t.anchorOffsetX = 97;
		t.anchorOffsetY = 38;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 378;
		t.y = 461;
		t.elementsContent = [this._Image13_i(),this._Label1_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "TCS_AN4_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "NEXT";
		t.textAlign = "center";
		t.textColor = 0x725050;
		t.width = 166;
		t.x = 12;
		t.y = 18;
		return t;
	};
	_proto.txtScore_i = function () {
		var t = new eui.Label();
		this.txtScore = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 130;
		t.text = "100000";
		t.textAlign = "center";
		t.textColor = 0x6d1313;
		t.width = 652;
		t.x = 49;
		t.y = 205;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 98;
		t.stroke = 10;
		t.strokeColor = 0x561a1a;
		t.text = "SCORE";
		t.textColor = 0xe8d655;
		t.y = -29;
		return t;
	};
	return ResultWindowSkin;
})(eui.Skin);