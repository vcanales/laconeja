import React from 'react';
import { Link } from 'react-router';
import '../../public/css/header.css';

class Header extends React.Component {
    render() {
        return (
        	<header>
        		<div id="logo">
        			<svg id="logoImage" width="76px" height="61px" viewBox="0 0 76 61" version="1.1">
        			    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        			        <g id="colorizeLogo" transform="translate(-684.000000, -57.000000)" fill="#FFEEDC">
        			            <path d="M732.265,60.36 C732.265,58.504 733.77,57 735.624,57 C737.48,57 738.984,58.504 738.984,60.36 C738.984,62.214 737.48,63.719 735.624,63.719 C733.77,63.719 732.265,62.214 732.265,60.36 L732.265,60.36 L732.265,60.36 Z M741.116,77.241 L752.593,77.241 L760,84.648 L757.889,86.759 C757.014,87.634 755.596,87.634 754.721,86.759 L749.932,81.97 L733.813,89.488 C730.701,90.937 727.013,91.129 723.591,89.712 L722.447,92.471 C725.225,93.621 728.144,93.914 730.91,93.471 L707.255,117.126 L702.795,117.126 L710.986,102.938 L710.211,102.938 L690.309,102.938 C687.038,102.938 684.346,100.463 684,97.286 L692.167,89.118 C693.451,87.834 695.149,87.216 696.832,87.263 C697.21,83.889 698.274,80.536 700.08,77.409 C702.509,73.202 705.962,69.953 709.941,67.795 C710.062,72.32 708.975,76.934 706.545,81.143 C704.882,84.023 702.739,86.455 700.275,88.395 C700.58,88.607 700.87,88.849 701.142,89.12 L705.084,93.063 L717.364,71.792 C717.936,70.769 718.646,69.834 719.468,69.011 C721.764,66.714 724.939,65.296 728.445,65.296 C729.862,65.296 731.279,65.53 732.632,66.002 C734.381,66.611 736.023,67.615 737.42,69.013 C739.708,71.301 740.94,74.246 741.116,77.241 L741.116,77.241 L741.116,77.241 Z M692.394,94.354 C692.394,95.178 693.062,95.847 693.887,95.847 C694.712,95.847 695.38,95.178 695.38,94.354 C695.38,93.529 694.712,92.861 693.887,92.861 C693.062,92.861 692.394,93.529 692.394,94.354 L692.394,94.354 L692.394,94.354 Z M704.519,108.263 L695.655,117.126 L691.195,117.126 L697.662,105.925 L704.519,105.925 L704.519,108.263 Z M724,116.816092 L726.871795,116.816092 L726.871795,115.218391 L725.606838,115.218391 L725.606838,109.16092 L724,109.16092 L724,116.816092 Z M726.962963,116.816092 L728.672365,116.816092 L728.843305,115.758621 L730.14245,115.758621 L730.31339,116.816092 L732.045584,116.816092 L730.404558,109.16092 L728.603989,109.16092 L726.962963,116.816092 Z M729.071225,114.367816 L729.492877,112.022989 L729.91453,114.367816 L729.071225,114.367816 Z M737.584046,115.287356 C737.45489,115.302682 737.350428,115.314176 737.270655,115.321839 C737.190883,115.329502 737.109212,115.333333 737.025641,115.333333 C736.47863,115.333333 736.055082,115.134102 735.754986,114.735632 C735.454889,114.337163 735.304843,113.766287 735.304843,113.022989 C735.304843,112.272027 735.456789,111.689657 735.760684,111.275862 C736.064579,110.862067 736.493824,110.655172 737.048433,110.655172 C737.116809,110.655172 737.185185,110.657088 737.253561,110.66092 C737.321938,110.664751 737.413105,110.674329 737.527066,110.689655 L737.527066,109.183908 C737.359923,109.145594 737.217474,109.118774 737.099715,109.103448 C736.981956,109.088123 736.854702,109.08046 736.717949,109.08046 C736.254509,109.08046 735.83286,109.174329 735.452991,109.362069 C735.073123,109.549809 734.748339,109.81609 734.478632,110.16092 C734.208926,110.505749 734.000001,110.919538 733.851852,111.402299 C733.703703,111.88506 733.62963,112.421453 733.62963,113.011494 C733.62963,113.609198 733.701804,114.149423 733.846154,114.632184 C733.990504,115.114945 734.199429,115.522987 734.472934,115.856322 C734.74644,116.189657 735.07882,116.446359 735.470085,116.626437 C735.86135,116.806514 736.303891,116.896552 736.797721,116.896552 C736.942071,116.896552 737.069325,116.888889 737.179487,116.873563 C737.289649,116.858237 737.424501,116.831418 737.584046,116.793103 L737.584046,115.287356 Z M740.433048,109 C738.655262,109 737.766382,110.321826 737.766382,112.965517 C737.766382,115.63986 738.647665,116.977011 740.410256,116.977011 C742.180446,116.977011 743.065527,115.655186 743.065527,113.011494 C743.065527,110.337151 742.188043,109 740.433048,109 Z M740.421652,110.505747 C740.664769,110.505747 740.869895,110.628351 741.037037,110.873563 C741.166192,111.072798 741.25736,111.344826 741.310541,111.689655 C741.363723,112.034484 741.390313,112.524901 741.390313,113.16092 C741.390313,113.919544 741.308643,114.494251 741.145299,114.885057 C740.981955,115.275864 740.740742,115.471264 740.421652,115.471264 C740.07977,115.471264 739.83096,115.270117 739.675214,114.867816 C739.519467,114.465515 739.441595,113.827591 739.441595,112.954023 C739.441595,112.11877 739.519467,111.501918 739.675214,111.103448 C739.83096,110.704979 740.07977,110.505747 740.421652,110.505747 Z M743.384615,116.816092 L744.991453,116.816092 L744.991453,112.298851 L746.564103,116.816092 L748.125356,116.816092 L748.125356,109.16092 L746.541311,109.16092 L746.541311,113.264368 L745.105413,109.16092 L743.384615,109.16092 L743.384615,116.816092 Z M748.547009,116.816092 L751.680912,116.816092 L751.680912,115.172414 L750.153846,115.172414 L750.153846,113.816092 L751.441595,113.816092 L751.441595,112.218391 L750.153846,112.218391 L750.153846,110.758621 L751.680912,110.758621 L751.680912,109.16092 L748.547009,109.16092 L748.547009,116.816092 Z M754.678063,109.16092 L753.071225,109.16092 L753.071225,114.62069 C753.071225,114.896553 753.02944,115.093869 752.945869,115.212644 C752.862298,115.331418 752.721748,115.390805 752.524217,115.390805 C752.410256,115.390805 752.307693,115.367816 752.216524,115.321839 C752.125356,115.275862 752.007598,115.18774 751.863248,115.057471 L751.863248,116.770115 C752.189935,116.923372 752.547007,117 752.934473,117 C753.496679,117 753.927824,116.860155 754.22792,116.58046 C754.528017,116.300765 754.678063,115.896554 754.678063,115.367816 L754.678063,109.16092 Z M754.917379,116.816092 L756.626781,116.816092 L756.797721,115.758621 L758.096866,115.758621 L758.267806,116.816092 L760,116.816092 L758.358974,109.16092 L756.558405,109.16092 L754.917379,116.816092 Z M757.025641,114.367816 L757.447293,112.022989 L757.868946,114.367816 L757.025641,114.367816 Z" id="Shape"></path>
        			        </g>
        			    </g>
        			</svg>
        		</div>
        	</header>
		);
    }
}

export default Header;