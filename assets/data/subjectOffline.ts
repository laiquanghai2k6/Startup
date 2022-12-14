
import {QUIZ,RATE} from './subject'

export interface COURSEOFFLINE{
    type:string,
    name:string,
    quiz:QUIZOFFLINE[],
    hard:number,
}
export interface QUIZOFFLINE{
    quizImage:string
    answer: Array<string>
    CorrectAnswer:string,
    solution:string
}

export interface SUBJECTOFFLINE{
    name:string,
    courses:COURSEOFFLINE[],
    icon:string,
    id:string,
    num:number


}


export const SubjectOffline:SUBJECTOFFLINE[] = [
    {
        name:'Toán Học',
        courses:[{ 
            type:'ToanHocScreen',
            name:'Hàm Số Lượng Giác',
            hard:3,
            quiz:[
                {
                    quizImage:
                  'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/312562750_1070484970289324_7522105326220158031_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=WE48oEjeQegAX-8r-5s&_nc_ht=scontent-hkt1-1.xx&oh=03_AdROl5h39dM2QJVJdkxH5CvCekQa3aER4TLaHVaoiR60rQ&oe=6399C2AA',
                    answer:['y = sinx','y = cosx','y = tan x','y = cotx'],
                    CorrectAnswer:'y = cosx',
                    solution:'Sử dụng định nghĩa để kiểm tra tính chẵn, lẻ. Ta có hàm số chẵn là y = cosx'
                },
                {
                    quizImage:
                    'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/313360433_1310866142999990_8360666072722146459_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wIN9qzUhc6QAX9_sB9b&_nc_ht=scontent-hkt1-1.xx&oh=03_AdRFR_ZuX8SUMSDJXu7gXWho6kNwgRmoxTryGbS-ABASRQ&oe=6399BF95',
                    answer:['y = cosx + (sinx)²','y = sin x + cosx','y = -cosx ','y = sinx.cos3x'],
                    CorrectAnswer:'y = sinx.cos3x',
                    solution:'Ta có sin(-x).cos(-3x) = -sinx.cos3x'
                },
                {
                    quizImage:
                    'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/313909241_1534867176943057_2008093130022931376_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=E-JQbgNy8r8AX_ZJDVz&_nc_ht=scontent.fhan3-5.fna&oh=03_AdRZin1kUW5isLbkY2-oB1FVrdmKkXxifEF4aXJ_z2PHYw&oe=6399B1B5',
                    answer:['y=cot4x','y=(sinx + 1)/cosx','cot²x','y=|cotx|'],
                    CorrectAnswer:'y=cot4x',
                   
                    solution:'Hàm số lẻ có đồ thị đối xứng qua gốc tọa độ. Bằng cách kiểm tra tính chẵn, lẻ ta có y = cot4x là một hàm số lẻ.'

                },
                {
                    quizImage:
                    'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/313851303_3449436378712376_3027714609028886001_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RBPOqwoT--kAX-Wq6nQ&_nc_ht=scontent-hkt1-2.xx&oh=03_AdSIqCn8LcjHIsnkCBBbeaUVYWSyCt91EiMFX9EpEOg8bA&oe=6399B3DD',
                    answer:['f(x) là hàm số chẵn, g(x) là hàm số lẻ.',
                    'f(x) là hàm số lẻ, g(x) là hàm số chẵn.',
                    'f(x) là hàm số chẵn, g(x) là hàm số chẵn.',
                    ' f(x) và g(x) đều là hàm số lẻ.'
                ],
                    CorrectAnswer:'f(x) là hàm số lẻ, g(x) là hàm số chẵn.',
                    solution:'Ta có sin(-2x) = -sin 2x, tan²(-x) = tan²x.'
                },
                {
                    quizImage:
                    'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/313851303_3449436378712376_3027714609028886001_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RBPOqwoT--kAX-Wq6nQ&_nc_ht=scontent-hkt1-2.xx&oh=03_AdSIqCn8LcjHIsnkCBBbeaUVYWSyCt91EiMFX9EpEOg8bA&oe=6399B3DD',
                    answer:['f(x) là hàm số chẵn, g(x) là hàm số lẻ.',
                    'f(x) là hàm số lẻ, g(x) là hàm số chẵn.',
                    'f(x) là hàm số chẵn, g(x) là hàm số chẵn.',
                    ' f(x) và g(x) đều là hàm số lẻ.'
                ],
                    CorrectAnswer:'f(x) là hàm số lẻ, g(x) là hàm số chẵn.',
                    solution:'Ta có sin(-2x) = -sin 2x, tan²(-x) = tan²x.'
                },
                {
                    quizImage:
                    'https://i.ibb.co/hLKg3ZS/carbon-35.png',
                    answer:['3',
                    '2√2',
                    '2',
                    '√2'
                ],
                    CorrectAnswer:'√2',
                    solution:`Ta có y=2sinx.cosx+cos2x 
=sin2x+cos2x =√2sin(2x+π/4).Với mọi x có:
sin(2x+π/4) ≤ 1=>√2sin(2x+π/4)≤√2
Vậy giá trị lớn nhất hàm số là √2
                    `
                },
                {
                    quizImage:
                    'https://i.ibb.co/qpBN9D9/carbon-36.png',
                    answer:['-1',
                    '1-√2',
                    '0',
                    '1+√2'
                ],
                    CorrectAnswer:'1-√2',
                    solution:`Ta có y = sin²x+cos²x-2sinx.cosx
+cos2x = 1-sin2x+cos2x                    
=1-√2sin(2x-π/4).Với mọi x ta có:
sin(2x-π/4)≤ √2
=>1-√2sin(2x-π/4)≥1-√2               
=> giá trị nhỏ nhất của hàm số là 1-√2`
                },
                {
                    quizImage:
                    'https://i.ibb.co/d7jtnhF/carbon-37.png',
                    answer:['T = π',
                    'T=2π',
                    'T=π2',
                    'T=π/2'
                ],
                    CorrectAnswer:'T = π',
                    solution:`Ta có y = 2cos²x – 1 = cos2x, do đó hàm số tuần hoàn với chu kì T = 2π/2 = π.`
                },
                {
                    quizImage:
                    'https://i.ibb.co/8DxfL0X/Screenshot-3.jpg',
                    answer:['y=sinx/2',
                    'y=cosx/2',
                    'y= -cosx/4',
                    'y=sin(-x/2)'
                ],
                    CorrectAnswer:'y=sin(-x/2)',
                    solution:'Đồ thị hàm số đi qua gốc tọa độ nên loại ngay các phương án y=sinx/2 và y=-cosx/4. Đồ thị hàm số đi qua (π; -1) nên phương án y=sinx/2 cũng không thỏa mãn.'
                },
                {
                    quizImage:
                    'https://i.ibb.co/Rz8Qxrp/Screenshot-3.jpg',
                    answer:['y=sin(x/2)',
                    'y=sinx',
                    'y=cosx',
                    'y=cos(x/2)'
                ],
                    CorrectAnswer:'y=sinx/2',
                    solution:'Từ đồ thị ta nhận thấy hàm số có chu kì T =4π nên ta có thể loại ngay phương án y=sinx và y=cosx. Do đồ thị hàm số đi qua gốc tọa độ nên ta loại tiếp phương án y=cos(x/2).'
                },
            ]
        },
        {
            type:'ToanHocScreen',
            name:'Toán Xác Xuất',
            hard:1,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/vDfQXg9/carbon-8.png',
                  
                    answer:['P(a) = 5/6','P(A) = 1 - (5/6)^4','P(a)=5/6','P(a)=1-(5/6)'],
                    CorrectAnswer:'P(A) = 1 - (5/6)^4',
                    solution:'Lấy tổng số trường hợp trừ đi trường hợp không có mặt 4 chấm'
                },
                {
                    quizImage:
                  'https://i.ibb.co/7rVDwfG/carbon-9.png',
                  
                    answer:['23','17','40','391'],
                    CorrectAnswer:'40',
                    solution:'Theo quy tắc cộng có: 23 +17 = 40 cách chọn một học sinh tham gia cuộc thi môi trường.'
                },
                {
                    quizImage:
                  'https://i.ibb.co/KzvqvMj/carbon-10.png',
                  
                    answer:['7','27','42','50'],
                    CorrectAnswer:'27',
                    solution:`Bài toán quy về tìm các số hạng :        
                    với a,b,c ∈{1,2,3,4,5,6} và a+b+c=10.
                    Nhận thấy 10=1+3+6=1+4+5=2+3+5=2+4+4=3+3+4=2+2+6
                    *Với 3 chữ số khác nhau , lập được 3.2.1=6 số có 3 chữ số             
                    *Với ba chữ số trong đó có hai chữ số giống nhau, lập được 3số có 3 chữ số                 
                    Vì vậy, theo quy tắc cộng , ta thu được 6+6+6+3+3+3=27 số`
                
                },
                {
                    quizImage:
                  'https://i.ibb.co/rMKk9Bs/carbon-38.png',
                  
                    answer:['240','210','18','120'],
                    CorrectAnswer:'210',
                    solution:`Để chọn ba bông hoa có đủ cả ba màu (nghĩa là chọn một bông hoa hồng trắng- một bông hoa hồng đỏ- hoa hồng vàng), ta có:
Có 5 cách chọn hoa hồng trắng.                    
Có 6 cách chọn hoa hồng đỏ.                                       
Có 7 cách chọn hoa hồng vàng.                   
Vậy theo qui tắc nhân ta có 5.6.7 = 210 cách.`
                },
                {
                    quizImage:
                  'https://i.ibb.co/myb2kwQ/carbon-39.png',
                  
                    answer:['25','75','100','15'],
                    CorrectAnswer:'75',
                    solution:`Để chọn thực đơn, ta có:
Có 5 cách chọn món ăn.                    
Có 5 cách chọn quả tráng miệng.                    
Có 3 cách chọn nước uống.                    
Vậy theo qui tắc nhân ta có 5.5.3 = 75 cách.
                    `
                },
                {
                    quizImage:
                  'https://i.ibb.co/7rVDwfG/carbon-9.png',
                  
                    answer:['23','17','40','391'],
                    CorrectAnswer:'40',
                    solution:'Theo quy tắc cộng có: 23 +17 = 40 cách chọn một học sinh tham gia cuộc thi môi trường.'
                },
                {
                    quizImage:
                  'https://i.ibb.co/GRx9Htr/carbon-40.png',
                  
                    answer:['100','91','10','90'],
                    CorrectAnswer:'90',
                    solution:`Để chọn một người đàn ông và một người phụ nữ không là vợ chồng, ta có
Có 10 cách chọn người đàn ông.
Có 9 cách chọn người phụ nữ ( trừ 1 người là vợ của người đàn ông đã chọn trước đó).                    
Vậy theo qui tắc nhân ta có 10.9 = 90 cách.`
                },
                {
                    quizImage:
                  'https://i.ibb.co/7S2WV7s/carbon-41.png',
                  
                    answer:['9','10','18','24'],
                    CorrectAnswer:'24',
                    solution:`Từ A đến B có 4 cách.
Từ B đến C có 2 cách.
Từ C đến D có 2 cách.
Vậy theo qui tắc nhân ta có 4.2.3 = 24 cách.`
                },

            ]
        },
        {
            type:'ToanHocScreen',
            name:'Toan Xác Xuất 2',
            hard:2,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/bgmgNXG/carbon-11.png',
                  
                    answer:['20','280','400','391'],
                    CorrectAnswer:'280',
                    solution:`* Việc chọn 3 viên bi khác màu phải tiến hành 3 hành động liên tiếp:

                    chọn 1 bi đỏ trong 7 bi đỏ nên có 7 cách chọn,
                    
                    tương tự có 8 cách chọn 1 bi xanh và 5 cách chọn 1 bi vàng.
                    
                    Theo quy tắc nhân ta có: 7*8*5 = 280 cách.
                    
                    `
                },
                {
                    quizImage:
                  'https://i.ibb.co/NWpM5N1/carbon-12.png',
                  
                    answer:['11','36','42','18'],
                    CorrectAnswer:'36',
                    solution:`2016=2^5.3^2.7 nên ước có dạng 2^m.3^n.7^p
                    ( với m,n,p ∈ N và 0≤ m ≤ 5, 0 ≤ n ≤2, 0 ≤ p ≤1
                    Do đó, có 6 cách chọn m,3 cách chọn n, 2 cách chọn p.                    
                    Theo quy tắc nhân , có 6. 3. 2=36 ước số nguyên dương của 2016`
                },
                {
                    quizImage:
                  'https://i.ibb.co/Fm7YvH2/carbon-13.png',
                  
                    answer:['40','78400','131','2340'],
                    CorrectAnswer:'131',
                    solution:`Trường hợp 1- Lấy 1 bi đỏ và 1 bi xanh:
                    có 7 cách để lấy 1 bi đỏ và 8 cách để lấy 1 bi xanh. Do đó có 7.8 =56 cách lấy                  
                    -Trường hợp 2. Lấy 1 bi đỏ và 1 bi vàng:                   
                    có 7 cách lấy 1 bi đỏ và 5 cách lấy 1 bi vàng.                   
                    Do đó có 7.5=35 cách lấy                   
                    - trường hợp 3.Lấy 1 bi xanh và 1 bi vàng:                                       có 8 cách để lấy 1 bi xanh và 5 cách để lấy 1 bi vàng.        
                    Do đó có 8.5 = 40 cách để lấy
                    - Áp dụng quy tắc cộng cho 3 trường hợp, ta có 56 + 35 +40 = 131 cách
                    `
                },
                {
                    quizImage:
                  'https://i.ibb.co/9rXCs2y/carbon-42.png',
                  
                    answer:['3 991 680','4309440','84','63'],
                    CorrectAnswer:'3 991 680',
                    solution:`Một tuần có bảy ngày và mỗi ngày thăm một bạn.
Có 12 cách chọn bạn vào ngày thứ nhất.
Có 11 cách chọn bạn vào ngày thứ hai ( khác bạn ngày thứ nhất).                    
Có 10 cách chọn bạn vào ngày thứ ba ( khác bạn ngày thứ nhất, thứ 2)
Có 9 cách chọn bạn vào ngày thứ tư.
Có 8 cách chọn bạn vào ngày thứ năm.                    
Có 7 cách chọn bạn vào ngày thứ sáu.                    
Có 6 cách chọn bạn vào ngày thứ bảy.
Vậy theo qui tắc nhân ta có 12.11.10.9.8.7.6 = 3 991 680 cách.`
                },
                {
                    quizImage:
                  'https://i.ibb.co/93qFP63/carbon-43.png',
                  
                    answer:['160','240','180','120'],
                    CorrectAnswer:'180',
                    solution:''
                },
                {
                    quizImage:
                  'https://i.ibb.co/R7FHmgY/carbon-45.png',
                  
                    answer:['324','256','248','124'],
                    CorrectAnswer:'256',
                    solution:`Gọi số cần tìm có dạng abcd với (a, b, c, d) ∈ A = {1, 5, 6, 7}.
Vì số cần tìm có 4 chữ số không nhất thiết khác nhau nên:
a được chọn từ tập A (có 4 phần tử) nên có 4 cách chọn.      
b được chọn từ tập A (có 4 phần tử) nên có 4 cách chọn.             
c được chọn từ tập A (có 4 phần tử) nên có 4 cách chọn.
d được chọn từ tập A (có 4 phần tử) nên có 4 cách chọn. 
Như vậy, ta có 4.4.4.4 = 256 số cần tìm.`
                },
                {
                    quizImage:
                  'https://i.ibb.co/V39DNGD/carbon-46.png',
                  
                    answer:['36','62','54','42'],
                    CorrectAnswer:'42',
                    solution:`Các số bé hơn 100 chính là các số có một chữ số và hai chữ số được hình thành từ tập A = {1, 2, 3, 4, 5, 6}.
Từ tập A có thể lập được 6 số có một chữ số.
Gọi số có hai chữ số có dạng ab với (a, b) ∈ A.     
Trong đó:
a được chọn từ tập A (có 6 phần tử) nên có 6 cách chọn.
b được chọn từ tập A (có 6 phần tử) nên có 6 cách chọn.
Như vậy, ta có 6.6 = 36 số có hai chữ số.
Vậy, từ A có thể lập được 6 + 36 = 42 số tự nhiên bé hơn 100.`
                },

            ]
        },   {
            type:'ToanHocScreen',
            name:'Toán Xác Xuất 3',
            hard:3,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/dkCC5fz/carbon-47.png',
                  
                    answer:['154','145','144','155'],
                    CorrectAnswer:'144',
solution:`Gọi số cần tìm có dạng abcd với (a, b, c, d) ∈ A = {0, 1, 2, 3, 4, 5}.
Vì abcd là số lẻ ⇒ d = {1, 3, 5} ⇒ d có 3 cách chọn.
Khi đó, a có 4 cách chọn (khác 0 và d),.
b có 4 cách chọn và c có 3 cách chọn.
Vậy có tất cả 3.4.4.3 = 144 số cần tìm.`
                },
                {
                    quizImage:
                  'https://i.ibb.co/8dVTTJh/carbon-48.png',
                  
                    answer:['156','144','96','134'],
                    CorrectAnswer:'156',
solution:`Gọi số cần tìm có dạng abcd với (a, b, c, d) ∈ A= {0, 1, 2, 3, 4, 5}.
Vì abcd là số chẵn ⇒ d = {0, 2, 4}.
TH1. Nếu d = 0, số cần tìm là abc0 Khi đó:
a được chọn từ tập A\{0} nên có 5 cách chọn.
b được chọn từ tập A\{0, a} nên có 4 cách chọn.
c được chọn từ tập A\{0, a, b} nên có 3 cách chọn.
Như vậy, ta có 5.4.3 = 60 số có dạng abc0
TH2. Nếu d ∈ {2, 4} ⇒ d có 2 cách chọn.
Khi đó, a có 4 cách chọn (khác 0 và d),
b có 4 cách chọn và c có 3 cách chọn.
Như vậy, ta có 2.4.4.3 = 96 số cần tìm như trên.
Vậy có tất cả 60 +96 = 156 số cần tìm.`
                },
                {
                    quizImage:
                  'https://i.ibb.co/b1kPSrN/carbon-49.png',
                  
                    answer:['4!.5! ','4!+5!','9!','10!'],
                    CorrectAnswer:'40',
solution:`Do số học sinh nữ nhiều hơn số học sinh nam là 1 bạn nên để nam, nữ đứng xen kẽ thì nữ đứng trước.
- Nếu đánh số theo hàng dọc từ 1 đến 9 thì cần xếp 5 học nữ vào 5 vị trí lẻ nên có 5!cách xếp; và xếp 4 học sinh nam vào 4 vị trí chẵn nên có 4!cách xếp. Theo quy tắc nhân ta có, ta có 4!.5! Cách xếp 9 học sinh thành hàng dọc xen kẽ nam nữ.`
                },
                {
                    quizImage:
                  'https://i.ibb.co/SvvNcyN/carbon-50.png',
                  
                    answer:['15','720','30','360'],
                    CorrectAnswer:'360',
                    solution:'Số cách xếp khác nhau cho 4 người ngồi vào 6 chỗ trên một bàn dài là một chỉnh hợp chập 4 của 6 phần tử = 360 cách'
                },
                {
                    quizImage:
                  'https://i.ibb.co/p3thz5c/carbon-51.png',                  
                    answer:['210','200','180','150'],
                    CorrectAnswer:'210',
                    solution:'Số cách chọn ban thường vụ gồm ba chức vụ bí thư, phó bí thư, ủy viên thường vụ từ 7 người là số các chỉnh hợp chập ba của bảy phần tử.'
                },
                {
                    quizImage:
                  'https://i.ibb.co/23X0wxL/carbon-52.png',                  
                    answer:['9880','59280','2300','455'],
                    CorrectAnswer:'9880',
                    solution:'Nhóm học sinh 3 người được chọn (không phân biệt nam, nữ - công việc) là một tổ hợp chập 3 của 40 (học sinh).'
                },
            ]
        },   {
            type:'ToanHocScreen',
            name:'Toán Xác Xuất 3',
            hard:4,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/vDfQXg9/carbon-8.png',
                  
                    answer:['P(a) = 5/6','P(A) = 1 - (5/6)^4','P(a)=5/6','P(a)=1-(5/6)'],
                    CorrectAnswer:'P(A) = 1 - (5/6)^4',
                    solution:'Lấy tổng số trường hợp trừ đi trường hợp không có mặt 4 chấm'
                },
                {
                    quizImage:
                  'https://i.ibb.co/7rVDwfG/carbon-9.png',
                  
                    answer:['23','17','40','391'],
                    CorrectAnswer:'40',
                    solution:'Theo quy tắc cộng có: 23 +17 = 40 cách chọn một học sinh tham gia cuộc thi môi trường.'
                },
                {
                    quizImage:
                  'https://i.ibb.co/KzvqvMj/carbon-10.png',
                  
                    answer:['7','27','42','50'],
                    CorrectAnswer:'27',
                    solution:`Bài toán quy về tìm các số hạng :        
                    với a,b,c ∈{1,2,3,4,5,6} và a+b+c=10.
                    Nhận thấy 10=1+3+6=1+4+5=2+3+5=2+4+4=3+3+4=2+2+6
                    *Với 3 chữ số khác nhau , lập được 3.2.1=6 số có 3 chữ số             
                    *Với ba chữ số trong đó có hai chữ số giống nhau, lập được 3số có 3 chữ số                 
                    Vì vậy, theo quy tắc cộng , ta thu được 6+6+6+3+3+3=27 số`
                
                },
                {
                    quizImage:
                  'https://i.ibb.co/Ttp12q4/carbon-53.png',
                  
                    answer:['10','30','6','60'],
                    CorrectAnswer:'10',
                    solution:'Cắm 3 bông hoa giống nhau, mỗi bông vào 1 lọ nên ta sẽ lấy 3 lọ bất kỳ trong 5 lọ khác nhau để cắm bông.Vậy số cách cắm bông chính là một tổ hợp chập 3 của 5 phần tử (lọ hoa).'

                },
                {
                    quizImage:
                  'https://i.ibb.co/vvHNB1C/carbon-54.png',
                  
                    answer:['15','20','60','Một số khác.'],
                    CorrectAnswer:'20',
                    solution:'Cứ 3 điểm phân biệt không thẳng hàng tạo thành một tam giác.Lấy 3 điểm bất kỳ trong 6 điểm phân biệt thì số tam giác cần tìm chính là một tổ hợp chập 3 của 6 phần tử (điểm).'
                },
                {
                    quizImage:
                  'https://i.ibb.co/JxRC8mf/carbon-55.png',
                  
                    answer:['96 tam giác','60 tam giác','116 tam giác','80 tam giác'],
                    CorrectAnswer:'116 tam giác',
                    solution:`Số cách lấy 3 điểm từ 10 điểm phân biệt là 10C3=120
                    Số cách lấy 3 điểm bất kì trong 4 điểm A1, A2, A3, A4 là 4C3=4
                    Khi lấy 3 điểm bất kì trong 4 điểm A1, A2, A3, A4 thì sẽ không tạo thành tam giác.                    
                    Như vậy, số tam giác tạo thành : 120 - 4 = 116 tam giác.`
                },

            ]
        },   {
            type:'ToanHocScreen',
            name:'Toán 11-1',
            hard:5,
            quiz:[
                {
                    quizImage:
                  'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/312562750_1070484970289324_7522105326220158031_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=WE48oEjeQegAX-8r-5s&_nc_ht=scontent-hkt1-1.xx&oh=03_AdROl5h39dM2QJVJdkxH5CvCekQa3aER4TLaHVaoiR60rQ&oe=6399C2AA',
                    answer:['y = sinx','y = cosx','y = tan x','y = cotx'],
                    CorrectAnswer:'y = cosx',
                    solution:'Sử dụng định nghĩa để kiểm tra tính chẵn, lẻ. Ta có hàm số chẵn là y = cosx'
                },
                {
                    quizImage:
                    'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/313360433_1310866142999990_8360666072722146459_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wIN9qzUhc6QAX9_sB9b&_nc_ht=scontent-hkt1-1.xx&oh=03_AdRFR_ZuX8SUMSDJXu7gXWho6kNwgRmoxTryGbS-ABASRQ&oe=6399BF95',
                    answer:['y = cosx + (sinx)²','y = sin x + cosx','y = -cosx ','y = sinx.cos3x'],
                    CorrectAnswer:'y = sinx.cos3x',
                    solution:'Ta có sin(-x).cos(-3x) = -sinx.cos3x'
                },
                {
                    quizImage:
                    'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/313909241_1534867176943057_2008093130022931376_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=E-JQbgNy8r8AX_ZJDVz&_nc_ht=scontent.fhan3-5.fna&oh=03_AdRZin1kUW5isLbkY2-oB1FVrdmKkXxifEF4aXJ_z2PHYw&oe=6399B1B5',
                    answer:['y=cot4x','y=(sinx + 1)/cosx','cot²x','y=|cotx|'],
                    CorrectAnswer:'y=cot4x',
                   
                    solution:'Hàm số lẻ có đồ thị đối xứng qua gốc tọa độ. Bằng cách kiểm tra tính chẵn, lẻ ta có y = cot4x là một hàm số lẻ.'

                },
                {
                    quizImage:
                    'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.15752-9/313851303_3449436378712376_3027714609028886001_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RBPOqwoT--kAX-Wq6nQ&_nc_ht=scontent-hkt1-2.xx&oh=03_AdSIqCn8LcjHIsnkCBBbeaUVYWSyCt91EiMFX9EpEOg8bA&oe=6399B3DD',
                    answer:['f(x) là hàm số chẵn, g(x) là hàm số lẻ.',
                    'f(x) là hàm số lẻ, g(x) là hàm số chẵn.',
                    'f(x) là hàm số chẵn, g(x) là hàm số chẵn.',
                    ' f(x) và g(x) đều là hàm số lẻ.'
                ],
                    CorrectAnswer:'f(x) là hàm số lẻ, g(x) là hàm số chẵn.',
                    solution:'Ta có sin(-2x) = -sin 2x, tan²(-x) = tan²x.'
                },
                {
                    quizImage:
                  'https://i.ibb.co/SQ10FPn/carbon-56.png',
                  
                    answer:['5690','5960','5950','5590'],
                    CorrectAnswer:'5950',
                    solution:''
                },
                {
                    quizImage:
                  'https://i.ibb.co/ZBX8gNm/carbon-57.png',
                  
                    answer:['10','20','18','22'],
                    CorrectAnswer:'20',
                    solution:'Hai đường tròn phân biệt cho tối đa hai giao điểm.Và 5 đường tròn phân biệt cho số giao điểm tối đa khi 2 đường tròn bất kỳ trong 5 đường tròn đôi một cắt nhau.Vậy số giao điểm tối đa của 5 đường tròn phân biệt là 2.5C2=20'
                },
            ]
        },
        {
            type:'ToanHocScreen',
            name:'Toán 11-2',
          hard:4,
            
                quiz:[
                    {
                        quizImage:
                      'https://i.ibb.co/bgmgNXG/carbon-11.png',
                      
                        answer:['20','280','400','391'],
                        CorrectAnswer:'280',
                        solution:`* Việc chọn 3 viên bi khác màu phải tiến hành 3 hành động liên tiếp:
    
                        chọn 1 bi đỏ trong 7 bi đỏ nên có 7 cách chọn,
                        
                        tương tự có 8 cách chọn 1 bi xanh và 5 cách chọn 1 bi vàng.
                        
                        Theo quy tắc nhân ta có: 7*8*5 = 280 cách.
                        
                        `
                    },
                    {
                        quizImage:
                      'https://i.ibb.co/NWpM5N1/carbon-12.png',
                      
                        answer:['11','36','42','18'],
                        CorrectAnswer:'36',
                        solution:`2016=2^5.3^2.7 nên ước có dạng 2^m.3^n.7^p
                        ( với m,n,p ∈ N và 0≤ m ≤ 5, 0 ≤ n ≤2, 0 ≤ p ≤1
                        Do đó, có 6 cách chọn m,3 cách chọn n, 2 cách chọn p.                    
                        Theo quy tắc nhân , có 6. 3. 2=36 ước số nguyên dương của 2016`
                    },
                    {
                        quizImage:
                      'https://i.ibb.co/Fm7YvH2/carbon-13.png',
                      
                        answer:['40','78400','131','2340'],
                        CorrectAnswer:'131',
                        solution:`Trường hợp 1- Lấy 1 bi đỏ và 1 bi xanh:
                        có 7 cách để lấy 1 bi đỏ và 8 cách để lấy 1 bi xanh. Do đó có 7.8 =56 cách lấy                  
                        -Trường hợp 2. Lấy 1 bi đỏ và 1 bi vàng:                   
                        có 7 cách lấy 1 bi đỏ và 5 cách lấy 1 bi vàng.                   
                        Do đó có 7.5=35 cách lấy                   
                        - trường hợp 3.Lấy 1 bi xanh và 1 bi vàng:                                      
                         có 8 cách để lấy 1 bi xanh và 5 cách để lấy 1 bi vàng.        
                        Do đó có 8.5 = 40 cách để lấy
                        - Áp dụng quy tắc cộng cho 3 trường hợp, ta có 56 + 35 +40 = 131 cách
                        `
                    },
                    {
                        quizImage:
                      'https://i.ibb.co/d79XV2n/carbon-58.png',
                      
                        answer:['90','45','35','Một số khác.'],
                        CorrectAnswer:'35',
solution:`Đa giác lồi 10 cạnh thì có 10 đỉnh.
Lấy hai điểm bất kỳ trong 10 đỉnh của đa giác lồi ta được số đoạn thẳng gồm cạnh và đường chéo của đa giác lồi.Do đó, tổng số cạnh và đường chéo của đa giác là:10C2.Suy ra,số đường chéo cần tìm là 10C2-10=35`
                    },
                    {
                        quizImage:
                      'https://i.ibb.co/VtJDH5y/carbon-59.png',
                      
                        answer:['n = 15','n = 27','n = 8','n = 18'],
                        CorrectAnswer:'n = 18',
                        solution:''
                    },
    
                ]
            
        },
        
    ],
        icon:
        'https://img.icons8.com/nolan/344/math.png',
        id:"ToanHocScreen",
        num: 1,
        
    },
    {
        name:'Văn Học',
        courses:[{
            type:'VanHocScreen',
            name:'Luyện Tập Tiếng Việt-1',
            hard:1,
            
                quiz:[
                    {
                        quizImage:
                      'https://i.ibb.co/Snh89Dr/carbon-14.png',
                      
                        answer:['Vì mọi tiêu chí phân biệt đều chỉ có ý nghĩa tương đối',
                        'Vì ngày xưa văn sử bất phân.',
                        'Vì ngày xưa văn triết bất phân.',
                        'Vì nhiều khi văn sử triết bất phân.'
                    ],
                        CorrectAnswer:'Vì mọi tiêu chí phân biệt đều chỉ có ý nghĩa tương đối',
                        solution:``
                    },
                    {
                        quizImage:
                      'https://i.ibb.co/CpLpWwD/carbon-15.png',
                      
                        answer:['Văn bản có tính đa nghĩa.',
                        'Có sự thống nhất về nội dung tư tưởng và hình thức trình bày.',
                        'Ngôn ngữ có tính nghệ thuật.',
                        'Chứa đựng một thế giới hình tượng sống động, hấp dẫn.'],
                        CorrectAnswer:'Có sự thống nhất về nội dung tư tưởng và hình thức trình bày.',
                        solution:``
                    },
                    {
                        quizImage:
                      'https://i.ibb.co/qgFNqPB/carbon-16.png',
                      
                        answer:['Văn bản văn học',
                        'Văn bản nghệ thuật',
                        'Văn bản sinh hoạt',
                        'Văn bản khoa học'],
                        CorrectAnswer:'Văn bản văn học',
                        solution:`
                        `
                    },
                    {
                        quizImage:
                      'https://i.ibb.co/cwGLbrx/carbon-60.png',
                      
                        answer:['Tầng hình tượng, tầng hàm nghĩa, tầng ngôn từ',
                        'Tầng hình tượng, tầng ngôn từ, tầng hàm nghĩa',
                        'Tầng ngôn từ, tầng hình tượng, tầng hàm nghĩa',
                        'Tầng hàm nghĩa, tầng hình tượng, tầng ngôn từ'],
                        CorrectAnswer:'Tầng ngôn từ, tầng hình tượng, tầng hàm nghĩa',
                        solution:''
                    },
                    {
                        quizImage:
                      'https://i.ibb.co/9tXSsXD/carbon-61.png',
                      
                        answer:['Chất liệu ngôn từ (từ ngữ âm tới ngữ nghĩa và ngữ pháp).',
                        'Chất liệu hình tượng (chi tiết, cốt truyện, cấu tứ, nhân vật, hoàn cảnh, tâm trạng,...).',
                        'Chất liệu ngôn từ là chính, chất liệu hình tượng là phụ.',
                        'Chất liệu ngôn từ là phụ, chất liệu hình tượng là chính.'],
                        CorrectAnswer:'Chất liệu ngôn từ là phụ, chất liệu hình tượng là chính.',
                        solution:''
                    },
                ],
            },
            {
                type:'VanHocScreen',
                name:'Luyện Tập Tiếng Việt 2',
                hard:5,
                
                    quiz:[
                        {
                            quizImage:
                          'https://i.ibb.co/NyqTJ0D/carbon-18.png',
                          
                            answer:['Giàu biện pháp tu từ, có tính thẩm mĩ cao.',
                            'Biểu hiện tư tưởng, cảm xúc của con người.',
                            'Có tính chính xác, khách quan, khoa học.',
                            'Mang tính biểu tượng và đa nghĩa.'],
                            CorrectAnswer:'Có tính chính xác, khách quan, khoa học.',
                            solution:`
                            `
                        },
                        {
                            quizImage:
                          'https://i.ibb.co/285JpY0/carbon-19.png',
                          
                            answer:['Vì còn tùy thuộc nhiều vào quan niệm của mỗi quốc gia.',
                            'Vì còn tùy thuộc vào quan niệm của mỗi thời đại, thời kì lịch sử.',
                            'Vì còn tùy thuộc nhiều vào quan niệm riêng của mỗi người.',
                            'Vì còn tùy thuộc vào đặc trưng của từng thể loại, thể tài.'],
                            CorrectAnswer:'Vì còn tùy thuộc nhiều vào quan niệm riêng của mỗi người.',
                            solution:``
                        },
                        {
                            quizImage:
                          'https://i.ibb.co/54BG53d/carbon-20.png',
                          
                            answer:['Phú sông Bạch Đằng',
                            'Khái quát lịch sử tiếng Việt',
                            'Nguyễn Trãi',
                            'Chuyện chức phán sự đền Tản Viên'],
                            CorrectAnswer:'Khái quát lịch sử tiếng Việt',
                            solution:`
                            `
                        },
                        {
                            quizImage:
                          '',
                          
                            answer:['23',
                                    '17',
                                    '40',
                                    '391'],
                            CorrectAnswer:'40',
                            solution:''
                        },
                    ],
                },
                {
                    type:'VanHocScreen',
                    name:'Luyện Tập Tiếng Việt 3',
                    hard:5,
                    
                        quiz:[
                            {
                                quizImage:
                              'https://i.ibb.co/G0WTN8M/carbon-21.png',
                              
                                answer:['Hỡi cô tát nước bên đàng – Sao cô múc ánh trăng vàng đổ đi ?',
                                'Chiều chiều ra đứng ngõ sau – Trông về quê mẹ ruột đau chín chiều.',
                                'Giống ruồi là giống hiểm nguy – Bởi vì cánh nó mang vi trùng nhiều.',
                                'Đường vô xứ Nghệ quanh quanh – Non xanh nước biếc như tranh họa đồ.'],
                                CorrectAnswer:'Giống ruồi là giống hiểm nguy – Bởi vì cánh nó mang vi trùng nhiều.',
                                solution:`
                                `
                            },
                            {
                                quizImage:
                              'https://i.ibb.co/VB9rr76/carbon-22.png',
                              
                                answer:['Tầng hình tượng, tầng hàm nghĩa, tầng ngôn từ',
                                'Tầng hình tượng, tầng ngôn từ, tầng hàm nghĩa',
                                'Tầng ngôn từ, tầng hình tượng, tầng hàm nghĩa',
                                'Tầng hàm nghĩa, tầng hình tượng, tầng ngôn từ'],
                                CorrectAnswer:'Tầng ngôn từ, tầng hình tượng, tầng hàm nghĩa',
                                solution:``
                            },
                            {
                                quizImage:
                              'https://i.ibb.co/smyW6kH/carbon-23.png',
                              
                                answer:['Chất liệu hình tượng (chi tiết, cốt truyện, cấu tứ, nhân vật, hoàn cảnh, tâm trạng,...).',
                                'Chất liệu ngôn từ (từ ngữ âm tới ngữ nghĩa và ngữ pháp).',
                                'Chất liệu ngôn từ là chính, chất liệu hình tượng là phụ.',
                                'Chất liệu ngôn từ là phụ, chất liệu hình tượng là chính.'],
                                CorrectAnswer:'Chất liệu ngôn từ là phụ, chất liệu hình tượng là chính.',
                                solution:`
                                `
                            },
                        ],
                    },
                    {
                        type:'VanHocScreen',
                        name:'Luyện Tập Tiếng Việt 4',
                        hard:2,
                        
                            quiz:[
                                {
                                    quizImage:
                                  'https://i.ibb.co/Snh89Dr/carbon-14.png',
                                  
                                    answer:['Vì mọi tiêu chí phân biệt đều chỉ có ý nghĩa tương đối',
                                    'Vì ngày xưa văn sử bất phân.',
                                    'Vì ngày xưa văn triết bất phân.',
                                    'Vì nhiều khi văn sử triết bất phân.'
                                ],
                                    CorrectAnswer:'Vì mọi tiêu chí phân biệt đều chỉ có ý nghĩa tương đối',
                                    solution:``
                                },
                                {
                                    quizImage:
                                  'https://i.ibb.co/CpLpWwD/carbon-15.png',
                                  
                                    answer:['Văn bản có tính đa nghĩa.',
                                    'Có sự thống nhất về nội dung tư tưởng và hình thức trình bày.',
                                    'Ngôn ngữ có tính nghệ thuật.',
                                    'Chứa đựng một thế giới hình tượng sống động, hấp dẫn.'],
                                    CorrectAnswer:'Có sự thống nhất về nội dung tư tưởng và hình thức trình bày.',
                                    solution:``
                                },
                                {
                                    quizImage:
                                  'https://i.ibb.co/qgFNqPB/carbon-16.png',
                                  
                                    answer:['Văn bản văn học',
                                    'Văn bản nghệ thuật',
                                    'Văn bản sinh hoạt',
                                    'Văn bản khoa học'],
                                    CorrectAnswer:'Văn bản văn học',
                                    solution:`
                                    `
                                },
                            ],
                        },
                        {
                            type:'VanHocScreen',
                            name:'Luyện Tập Tiếng Việt 5',
                            hard:3,
                            
                                quiz:[
                                    {
                                        quizImage:
                                      'https://i.ibb.co/NyqTJ0D/carbon-18.png',
                                      
                                        answer:['Giàu biện pháp tu từ, có tính thẩm mĩ cao.',
                                        'Biểu hiện tư tưởng, cảm xúc của con người.',
                                        'Có tính chính xác, khách quan, khoa học.',
                                        'Mang tính biểu tượng và đa nghĩa.'],
                                        CorrectAnswer:'Có tính chính xác, khách quan, khoa học.',
                                        solution:`
                                        `
                                    },
                                    {
                                        quizImage:
                                      'https://i.ibb.co/285JpY0/carbon-19.png',
                                      
                                        answer:['Vì còn tùy thuộc nhiều vào quan niệm của mỗi quốc gia.',
                                        'Vì còn tùy thuộc vào quan niệm của mỗi thời đại, thời kì lịch sử.',
                                        'Vì còn tùy thuộc nhiều vào quan niệm riêng của mỗi người.',
                                        'Vì còn tùy thuộc vào đặc trưng của từng thể loại, thể tài.'],
                                        CorrectAnswer:'Vì còn tùy thuộc nhiều vào quan niệm riêng của mỗi người.',
                                        solution:``
                                    },
                                    {
                                        quizImage:
                                      'https://i.ibb.co/54BG53d/carbon-20.png',
                                      
                                        answer:['Phú sông Bạch Đằng',
                                        'Khái quát lịch sử tiếng Việt',
                                        'Nguyễn Trãi',
                                        'Chuyện chức phán sự đền Tản Viên'],
                                        CorrectAnswer:'Khái quát lịch sử tiếng Việt',
                                        solution:`
                                        `
                                    },
                                ],
                            },
                            {
                                type:'VanHocScreen',
                                name:'Luyện Tập Tiếng Việt 6',
                                hard:4,
                                
                                    quiz:[
                                        {
                                            quizImage:
                                          'https://i.ibb.co/G0WTN8M/carbon-21.png',
                                          
                                            answer:['Hỡi cô tát nước bên đàng – Sao cô múc ánh trăng vàng đổ đi ?',
                                            'Chiều chiều ra đứng ngõ sau – Trông về quê mẹ ruột đau chín chiều.',
                                            'Giống ruồi là giống hiểm nguy – Bởi vì cánh nó mang vi trùng nhiều.',
                                            'Đường vô xứ Nghệ quanh quanh – Non xanh nước biếc như tranh họa đồ.'],
                                            CorrectAnswer:'Giống ruồi là giống hiểm nguy – Bởi vì cánh nó mang vi trùng nhiều.',
                                            solution:`
                                            `
                                        },
                                        {
                                            quizImage:
                                          'https://i.ibb.co/VB9rr76/carbon-22.png',
                                          
                                            answer:['Tầng hình tượng, tầng hàm nghĩa, tầng ngôn từ',
                                            'Tầng hình tượng, tầng ngôn từ, tầng hàm nghĩa',
                                            'Tầng ngôn từ, tầng hình tượng, tầng hàm nghĩa',
                                            'Tầng hàm nghĩa, tầng hình tượng, tầng ngôn từ'],
                                            CorrectAnswer:'Tầng ngôn từ, tầng hình tượng, tầng hàm nghĩa',
                                            solution:``
                                        },
                                        {
                                            quizImage:
                                          'https://i.ibb.co/smyW6kH/carbon-23.png',
                                          
                                            answer:['Chất liệu hình tượng (chi tiết, cốt truyện, cấu tứ, nhân vật, hoàn cảnh, tâm trạng,...).',
                                            'Chất liệu ngôn từ (từ ngữ âm tới ngữ nghĩa và ngữ pháp).',
                                            'Chất liệu ngôn từ là chính, chất liệu hình tượng là phụ.',
                                            'Chất liệu ngôn từ là phụ, chất liệu hình tượng là chính.'],
                                            CorrectAnswer:'Chất liệu ngôn từ là phụ, chất liệu hình tượng là chính.',
                                            solution:`
                                            `
                                        },
                                    ],
                                }
        ],
        icon:
        'https://img.icons8.com/nolan/344/literature.png', 
        id:"VanHocScreen",
        num: 2,
    },
    {
        name:'Hóa',
       courses:[
        {
        type:'HoaHocScreen',
        name:'Hóa Hữu Cơ 1',
        hard:4,
    
        quiz:[
        
            {
                quizImage:
              'https://i.ibb.co/s3HQ93f/carbon-24.png',
              
                answer:['51%','49%','66%','34%.'],
                CorrectAnswer:'51%',
                solution:`
                Gọi x và y là số mol CH3OH (Z) và C2H5OH (T)
                {x+y = 0,1
                {32x+46y = 3,76
                    =>x = 0,06;y=0,04
                    %mCH3OH = (0,06.32)/3,76 = 51%
                `
            },],
        },
        {
            type:'HoaHocScreen',
            name:'Hóa Hữu Cơ 2',
            hard:4,
            
                quiz:[
                
                    {
                        quizImage:
                      'https://i.ibb.co/c8K83PK/carbon-25.png',
                      
                        answer:['3','4','5','6'],
                        CorrectAnswer:'6',
                        solution:`
                        `
                    },],
                },
                {
                    type:'HoaHocScreen',
                    name:'Hóa Hữu Cơ 4',
                    hard:4,
                    
                        quiz:[
                        
                            {
                                quizImage:
                              'https://i.ibb.co/s3HQ93f/carbon-24.png',
                              
                                answer:['51%','49%','66%','34%.'],
                                CorrectAnswer:'51%',
                                solution:`
                                Gọi x và y là số mol CH3OH (Z) và C2H5OH (T)
                                {x+y = 0,1
                                {32x+46y = 3,76
                                    =>x = 0,06;y=0,04
                                    %mCH3OH = (0,06.32)/3,76 = 51%
                                `
                            },],
                        },
                        {
                            type:'HoaHocScreen',
                            name:'Hóa Hữu Cơ 3',
                            hard:4,
                            
                                quiz:[
                                
                                    {
                                        quizImage:
                                      'https://i.ibb.co/c8K83PK/carbon-25.png',
                                      
                                        answer:['3','4','5','6'],
                                        CorrectAnswer:'6',
                                        solution:`
                                        `
                                    },],
                                },
            
    ],
        icon:
        'https://img.icons8.com/external-fauzidea-gradient-fauzidea/344/external-chemistry-back-to-school-fauzidea-gradient-fauzidea.png', 
        id:"HoaHocScreen",
        num: 3,
    },
    {
        name:'Vật Lí',
        courses:[
            {
                type:'VatLiScreen',
                name:'Điện Tích Điện Trường 1',
                hard:4,
    
        quiz:[
        
            {
                quizImage:
              'https://i.ibb.co/DYtF6KY/carbon-26.png',
              
                answer:['Các điện tích cùng loại thì đẩy nhau.',
                'Các điện tích khác loại thì hút nhau',
                'Hai thanh nhựa sau khi cọ xát đưa lại gần thì chúng sẽ hút nhau.',
                'Hai thanh thủy tinh sau khi cọ xát  đưa lại gần nhau thì chúng sẽ đẩy nhau.'],
                CorrectAnswer:'Hai thanh nhựa sau khi cọ xát đưa lại gần thì chúng sẽ hút nhau.',
                solution:`
                Vì 2 thanh nhựa giống nhau khi cọ như nhau sẽ tích điện cùng loại và chúng sẽ phải đẩy nhau.
                `
            },
            {
                quizImage:
              'https://i.ibb.co/XXFPy7y/carbon-27.png',
              
                answer:['Có hai loại điện tích là điện tích dương và điện tích âm',
                'Các điện tích khác loại thì hút nhau',
                'Hai quả cầu nhỏ nhiễm điện đặt xa nhau thì có thể coi chúng là các điện tích điểm',
                'Khi hút nhau các điện tích sẽ dịch chuyển lại gần nhau'],
                CorrectAnswer:'Khi hút nhau các điện tích sẽ dịch chuyển lại gần nhau',
                solution:`
                Lực tương tác tĩnh điện có độ lớn rất nhỏ nên không thể làm dịch chuyển các điện tích.
                `
            },
        ],
        },
        {
            type:'VatLiScreen',
            name:'Điện Tích Điện Trường 1',
            hard:4,
            
                quiz:[
                
                    {
                        quizImage:
                      'https://i.ibb.co/DYtF6KY/carbon-26.png',
                      
                        answer:['Các điện tích cùng loại thì đẩy nhau.',
                        'Các điện tích khác loại thì hút nhau',
                        'Hai thanh nhựa sau khi cọ xát đưa lại gần thì chúng sẽ hút nhau.',
                        'Hai thanh thủy tinh sau khi cọ xát  đưa lại gần nhau thì chúng sẽ đẩy nhau.'],
                        CorrectAnswer:'Hai thanh nhựa sau khi cọ xát đưa lại gần thì chúng sẽ hút nhau.',
                        solution:`
                        Vì 2 thanh nhựa giống nhau khi cọ như nhau sẽ tích điện cùng loại và chúng sẽ phải đẩy nhau.
                        `
                    },
                    {
                        quizImage:
                      'https://i.ibb.co/XXFPy7y/carbon-27.png',
                      
                        answer:['Có hai loại điện tích là điện tích dương và điện tích âm',
                        'Các điện tích khác loại thì hút nhau',
                        'Hai quả cầu nhỏ nhiễm điện đặt xa nhau thì có thể coi chúng là các điện tích điểm',
                        'Khi hút nhau các điện tích sẽ dịch chuyển lại gần nhau'],
                        CorrectAnswer:'Khi hút nhau các điện tích sẽ dịch chuyển lại gần nhau',
                        solution:`
                        Lực tương tác tĩnh điện có độ lớn rất nhỏ nên không thể làm dịch chuyển các điện tích.
                        `
                    },
                ],
                },     {
                    type:'VatLiScreen',
                    name:'Điện Tích Điện Trường 2',
                    hard:4,
                    
                        quiz:[
                        
                            {
                                quizImage:
                              'https://i.ibb.co/DYtF6KY/carbon-26.png',
                              
                                answer:['Các điện tích cùng loại thì đẩy nhau.',
                                'Các điện tích khác loại thì hút nhau',
                                'Hai thanh nhựa sau khi cọ xát đưa lại gần thì chúng sẽ hút nhau.',
                                'Hai thanh thủy tinh sau khi cọ xát  đưa lại gần nhau thì chúng sẽ đẩy nhau.'],
                                CorrectAnswer:'Hai thanh nhựa sau khi cọ xát đưa lại gần thì chúng sẽ hút nhau.',
                                solution:`
                                Vì 2 thanh nhựa giống nhau khi cọ như nhau sẽ tích điện cùng loại và chúng sẽ phải đẩy nhau.
                                `
                            },
                            {
                                quizImage:
                              'https://i.ibb.co/XXFPy7y/carbon-27.png',
                              
                                answer:['Có hai loại điện tích là điện tích dương và điện tích âm',
                                'Các điện tích khác loại thì hút nhau',
                                'Hai quả cầu nhỏ nhiễm điện đặt xa nhau thì có thể coi chúng là các điện tích điểm',
                                'Khi hút nhau các điện tích sẽ dịch chuyển lại gần nhau'],
                                CorrectAnswer:'Khi hút nhau các điện tích sẽ dịch chuyển lại gần nhau',
                                solution:`
                                Lực tương tác tĩnh điện có độ lớn rất nhỏ nên không thể làm dịch chuyển các điện tích.
                                `
                            },
                        ],
                        },
                        {
                            type:'VatLiScreen',
                            name:'Điện Tích Điện Trường 3',
                            hard:4,
                            
                                quiz:[
                                
                                    {
                                        quizImage:
                                      'https://i.ibb.co/DYtF6KY/carbon-26.png',
                                      
                                        answer:['Các điện tích cùng loại thì đẩy nhau.',
                                        'Các điện tích khác loại thì hút nhau',
                                        'Hai thanh nhựa sau khi cọ xát đưa lại gần thì chúng sẽ hút nhau.',
                                        'Hai thanh thủy tinh sau khi cọ xát  đưa lại gần nhau thì chúng sẽ đẩy nhau.'],
                                        CorrectAnswer:'Hai thanh nhựa sau khi cọ xát đưa lại gần thì chúng sẽ hút nhau.',
                                        solution:`
                                        Vì 2 thanh nhựa giống nhau khi cọ như nhau sẽ tích điện cùng loại và chúng sẽ phải đẩy nhau.
                                        `
                                    },
                                    {
                                        quizImage:
                                      'https://i.ibb.co/XXFPy7y/carbon-27.png',
                                      
                                        answer:['Có hai loại điện tích là điện tích dương và điện tích âm',
                                        'Các điện tích khác loại thì hút nhau',
                                        'Hai quả cầu nhỏ nhiễm điện đặt xa nhau thì có thể coi chúng là các điện tích điểm',
                                        'Khi hút nhau các điện tích sẽ dịch chuyển lại gần nhau'],
                                        CorrectAnswer:'Khi hút nhau các điện tích sẽ dịch chuyển lại gần nhau',
                                        solution:`
                                        Lực tương tác tĩnh điện có độ lớn rất nhỏ nên không thể làm dịch chuyển các điện tích.
                                        `
                                    },
                                ],
                                },     {
                                    type:'VatLiScreen',
                                    name:'Điện Tích Điện Trường 4',
                                    hard:4,
                                    
                                        quiz:[
                                        
                                            {
                                                quizImage:
                                              'https://i.ibb.co/DYtF6KY/carbon-26.png',
                                              
                                                answer:['Các điện tích cùng loại thì đẩy nhau.',
                                                'Các điện tích khác loại thì hút nhau',
                                                'Hai thanh nhựa sau khi cọ xát đưa lại gần thì chúng sẽ hút nhau.',
                                                'Hai thanh thủy tinh sau khi cọ xát  đưa lại gần nhau thì chúng sẽ đẩy nhau.'],
                                                CorrectAnswer:'Hai thanh nhựa sau khi cọ xát đưa lại gần thì chúng sẽ hút nhau.',
                                                solution:`
                                                Vì 2 thanh nhựa giống nhau khi cọ như nhau sẽ tích điện cùng loại và chúng sẽ phải đẩy nhau.
                                                `
                                            },
                                            {
                                                quizImage:
                                              'https://i.ibb.co/XXFPy7y/carbon-27.png',
                                              
                                                answer:['Có hai loại điện tích là điện tích dương và điện tích âm',
                                                'Các điện tích khác loại thì hút nhau',
                                                'Hai quả cầu nhỏ nhiễm điện đặt xa nhau thì có thể coi chúng là các điện tích điểm',
                                                'Khi hút nhau các điện tích sẽ dịch chuyển lại gần nhau'],
                                                CorrectAnswer:'Khi hút nhau các điện tích sẽ dịch chuyển lại gần nhau',
                                                solution:`
                                                Lực tương tác tĩnh điện có độ lớn rất nhỏ nên không thể làm dịch chuyển các điện tích.
                                                `
                                            },
                                        ],
                                        },
    
    ],
        icon:
        'https://img.icons8.com/nolan/344/physics.png',
        id:"VatLiScreen",
        num: 4,
    },
    {
        name:'Lịch Sử',
        courses:[{
        type:'LichSuScreen',
        name:'Lịch Sử 11-1',
        hard:4,
    
        quiz:[
        
            {
                quizImage:
              'https://i.ibb.co/f02hQPt/carbon-28.png',
              
                answer:['Tướng quân Sôgun ',
                'Thiên hoàng ',
                'Võ sĩ Samurai ',
                ' Tư sản công thương'],
                CorrectAnswer:'Tướng quân Sôgun ',
                solution:`
                Đến giữa thế kỉ XIX, Nhật Bản vẫn là một quốc gia phong kiến. Mặc dù nhà vua được tôn là Thiên hoàng, có địa vị tối cao, song quyền hành thực tế nằm trong tay Sôgun (Tướng quân) ở phủ chúa- Mạc phủ
                `
            },
            {
                quizImage:
              'https://i.ibb.co/C1wYn0v/carbon-29.png',
              
                answer:['Phong kiến quân phiệt',
                'Công nghiệp phát triển',
                'Phong kiến trì trệ, bảo thủ',
                'Tư bản chủ nghĩa'],
                CorrectAnswer:'Phong kiến trì trệ, bảo thủ',
                solution:`
                Đến giữa thế kỉ XIX, Nhật Bản vẫn là một quốc gia phong kiến trì trệ, bảo thủ. Mặc dù nhà vua được tôn là Thiên hoàng, có địa vị tối cao, song quyền hành thực tế nằm trong tay Sôgun (Tướng quân) ở phủ chúa - Mạc phủ.


                `
            },
            
        
        ],
        },
        {
            type:'LichSuScreen',
            name:'Lịch Sử 11-2',
            hard:4,
            
                quiz:[
                
                    {
                        quizImage:
                      'https://i.ibb.co/f02hQPt/carbon-28.png',
                      
                        answer:['Tướng quân Sôgun ',
                        'Thiên hoàng ',
                        'Võ sĩ Samurai ',
                        ' Tư sản công thương'],
                        CorrectAnswer:'Tướng quân Sôgun ',
                        solution:`
                        Đến giữa thế kỉ XIX, Nhật Bản vẫn là một quốc gia phong kiến. Mặc dù nhà vua được tôn là Thiên hoàng, có địa vị tối cao, song quyền hành thực tế nằm trong tay Sôgun (Tướng quân) ở phủ chúa- Mạc phủ
                        `
                    },
                    {
                        quizImage:
                      'https://i.ibb.co/C1wYn0v/carbon-29.png',
                      
                        answer:['Phong kiến quân phiệt',
                        'Công nghiệp phát triển',
                        'Phong kiến trì trệ, bảo thủ',
                        'Tư bản chủ nghĩa'],
                        CorrectAnswer:'Phong kiến trì trệ, bảo thủ',
                        solution:`
                        Đến giữa thế kỉ XIX, Nhật Bản vẫn là một quốc gia phong kiến trì trệ, bảo thủ. Mặc dù nhà vua được tôn là Thiên hoàng, có địa vị tối cao, song quyền hành thực tế nằm trong tay Sôgun (Tướng quân) ở phủ chúa - Mạc phủ.
        
        
                        `
                    },
                    
                
                ],
                },
                {
                    type:'LichSuScreen',
                    name:'Lịch Sử 11-3',
                    hard:4,
                    
                        quiz:[
                        
                            {
                                quizImage:
                              'https://i.ibb.co/f02hQPt/carbon-28.png',
                              
                                answer:['Tướng quân Sôgun ',
                                'Thiên hoàng ',
                                'Võ sĩ Samurai ',
                                ' Tư sản công thương'],
                                CorrectAnswer:'Tướng quân Sôgun ',
                                solution:`
                                Đến giữa thế kỉ XIX, Nhật Bản vẫn là một quốc gia phong kiến. Mặc dù nhà vua được tôn là Thiên hoàng, có địa vị tối cao, song quyền hành thực tế nằm trong tay Sôgun (Tướng quân) ở phủ chúa- Mạc phủ
                                `
                            },
                            {
                                quizImage:
                              'https://i.ibb.co/C1wYn0v/carbon-29.png',
                              
                                answer:['Phong kiến quân phiệt',
                                'Công nghiệp phát triển',
                                'Phong kiến trì trệ, bảo thủ',
                                'Tư bản chủ nghĩa'],
                                CorrectAnswer:'Phong kiến trì trệ, bảo thủ',
                                solution:`
                                Đến giữa thế kỉ XIX, Nhật Bản vẫn là một quốc gia phong kiến trì trệ, bảo thủ. Mặc dù nhà vua được tôn là Thiên hoàng, có địa vị tối cao, song quyền hành thực tế nằm trong tay Sôgun (Tướng quân) ở phủ chúa - Mạc phủ.
                
                
                                `
                            },
                            
                        
                        ],
                        },
                        {
                            type:'LichSuScreen',
                            name:'Lịch Sử 11-4',
                            hard:4,
                            
                                quiz:[
                                
                                    {
                                        quizImage:
                                      'https://i.ibb.co/f02hQPt/carbon-28.png',
                                      
                                        answer:['Tướng quân Sôgun ',
                                        'Thiên hoàng ',
                                        'Võ sĩ Samurai ',
                                        ' Tư sản công thương'],
                                        CorrectAnswer:'Tướng quân Sôgun ',
                                        solution:`
                                        Đến giữa thế kỉ XIX, Nhật Bản vẫn là một quốc gia phong kiến. Mặc dù nhà vua được tôn là Thiên hoàng, có địa vị tối cao, song quyền hành thực tế nằm trong tay Sôgun (Tướng quân) ở phủ chúa- Mạc phủ
                                        `
                                    },
                                    {
                                        quizImage:
                                      'https://i.ibb.co/C1wYn0v/carbon-29.png',
                                      
                                        answer:['Phong kiến quân phiệt',
                                        'Công nghiệp phát triển',
                                        'Phong kiến trì trệ, bảo thủ',
                                        'Tư bản chủ nghĩa'],
                                        CorrectAnswer:'Phong kiến trì trệ, bảo thủ',
                                        solution:`
                                        Đến giữa thế kỉ XIX, Nhật Bản vẫn là một quốc gia phong kiến trì trệ, bảo thủ. Mặc dù nhà vua được tôn là Thiên hoàng, có địa vị tối cao, song quyền hành thực tế nằm trong tay Sôgun (Tướng quân) ở phủ chúa - Mạc phủ.
                        
                        
                                        `
                                    },
                                    
                                
                                ],
                                },
        
        
    ],
        icon:
        'https://img.icons8.com/nolan/344/order-history.png',
        id:"LichSuScreen",
        num: 5,
    },
    {
        name:'Địa Lí',
        courses:[
            {
                    type:'DiaLiScreen',
                    name:'Địa Lí 11-1',
                    hard:4,
                    
                        quiz:[
                        
                            {
                                quizImage:
                              'https://i.ibb.co/df9b8B1/carbon-30.png',
                              
                                answer:[' GDP bình quân đầu người thấp,',
                                'chỉ số HDI ở mức cao',
                                'GDP bình quân đầu người thấp, chỉ số HDI ở mức thấp, nợ nước ngoài nhiều.',
                                'Năng suất lao động xã hội cao'],
                                CorrectAnswer:'GDP bình quân đầu người thấp, chỉ số HDI ở mức thấp, nợ nước ngoài nhiều.',
                                solution:`
                                Các nước đang phát triển là nhóm những nước nghèo, trình độ phát triển kinh tế thấp, đời sống nhân dân còn nhiều khó khăn => có GDP bình quân đầu người thấp, nợ nước ngoài nhiều và HDI ở mức thấp.
                                `
                            },
                            {
                                quizImage:
                              'https://i.ibb.co/2sRZh64/carbon-31.png',
                              
                                answer:['Đầu tư nước ngoài lớn',
                                'Ngành dịch vụ chiếm tỉ trọng lớn.',
                                'Chỉ số phát triển con người (HDI) cao.',
                                'Thu nhập bình quân đầu người không cao.'],
                                CorrectAnswer:'Thu nhập bình quân đầu người không cao.',
                                solution:`
                                Các nước phát triển có GDP/người cao, đầu tư nước ngoài nhiều, chỉ số HDI cao.
                                `
                            },
                        ],
            },
            {
                type:'DiaLiScreen',
                name:'Địa Lí 11-2',
                hard:4,
                
                    quiz:[
                    
                        {
                            quizImage:
                          'https://i.ibb.co/df9b8B1/carbon-30.png',
                          
                            answer:[' GDP bình quân đầu người thấp,',
                            'chỉ số HDI ở mức cao',
                            'GDP bình quân đầu người thấp, chỉ số HDI ở mức thấp, nợ nước ngoài nhiều.',
                            'Năng suất lao động xã hội cao'],
                            CorrectAnswer:'GDP bình quân đầu người thấp, chỉ số HDI ở mức thấp, nợ nước ngoài nhiều.',
                            solution:`
                            Các nước đang phát triển là nhóm những nước nghèo, trình độ phát triển kinh tế thấp, đời sống nhân dân còn nhiều khó khăn => có GDP bình quân đầu người thấp, nợ nước ngoài nhiều và HDI ở mức thấp.
                            `
                        },
                        {
                            quizImage:
                          'https://i.ibb.co/2sRZh64/carbon-31.png',
                          
                            answer:['Đầu tư nước ngoài lớn',
                            'Ngành dịch vụ chiếm tỉ trọng lớn.',
                            'Chỉ số phát triển con người (HDI) cao.',
                            'Thu nhập bình quân đầu người không cao.'],
                            CorrectAnswer:'Thu nhập bình quân đầu người không cao.',
                            solution:`
                            Các nước phát triển có GDP/người cao, đầu tư nước ngoài nhiều, chỉ số HDI cao.
                            `
                        },
                    ],
        },
        {
            type:'DiaLiScreen',
            name:'Địa Lí 11-3',
            hard:4,
            
                quiz:[
                
                    {
                        quizImage:
                      'https://i.ibb.co/df9b8B1/carbon-30.png',
                      
                        answer:[' GDP bình quân đầu người thấp,',
                        'chỉ số HDI ở mức cao',
                        'GDP bình quân đầu người thấp, chỉ số HDI ở mức thấp, nợ nước ngoài nhiều.',
                        'Năng suất lao động xã hội cao'],
                        CorrectAnswer:'GDP bình quân đầu người thấp, chỉ số HDI ở mức thấp, nợ nước ngoài nhiều.',
                        solution:`
                        Các nước đang phát triển là nhóm những nước nghèo, trình độ phát triển kinh tế thấp, đời sống nhân dân còn nhiều khó khăn => có GDP bình quân đầu người thấp, nợ nước ngoài nhiều và HDI ở mức thấp.
                        `
                    },
                    {
                        quizImage:
                      'https://i.ibb.co/2sRZh64/carbon-31.png',
                      
                        answer:['Đầu tư nước ngoài lớn',
                        'Ngành dịch vụ chiếm tỉ trọng lớn.',
                        'Chỉ số phát triển con người (HDI) cao.',
                        'Thu nhập bình quân đầu người không cao.'],
                        CorrectAnswer:'Thu nhập bình quân đầu người không cao.',
                        solution:`
                        Các nước phát triển có GDP/người cao, đầu tư nước ngoài nhiều, chỉ số HDI cao.
                        `
                    },
                ],
    },
    {
        type:'DiaLiScreen',
        name:'Địa Lí 11-4',
        hard:4,
        
            quiz:[
            
                {
                    quizImage:
                  'https://i.ibb.co/df9b8B1/carbon-30.png',
                  
                    answer:[' GDP bình quân đầu người thấp,',
                    'chỉ số HDI ở mức cao',
                    'GDP bình quân đầu người thấp, chỉ số HDI ở mức thấp, nợ nước ngoài nhiều.',
                    'Năng suất lao động xã hội cao'],
                    CorrectAnswer:'GDP bình quân đầu người thấp, chỉ số HDI ở mức thấp, nợ nước ngoài nhiều.',
                    solution:`
                    Các nước đang phát triển là nhóm những nước nghèo, trình độ phát triển kinh tế thấp, đời sống nhân dân còn nhiều khó khăn => có GDP bình quân đầu người thấp, nợ nước ngoài nhiều và HDI ở mức thấp.
                    `
                },
                {
                    quizImage:
                  'https://i.ibb.co/2sRZh64/carbon-31.png',
                  
                    answer:['Đầu tư nước ngoài lớn',
                    'Ngành dịch vụ chiếm tỉ trọng lớn.',
                    'Chỉ số phát triển con người (HDI) cao.',
                    'Thu nhập bình quân đầu người không cao.'],
                    CorrectAnswer:'Thu nhập bình quân đầu người không cao.',
                    solution:`
                    Các nước phát triển có GDP/người cao, đầu tư nước ngoài nhiều, chỉ số HDI cao.
                    `
                },
            ],
}

        ],
        icon:
        'https://img.icons8.com/nolan/344/geography.png',
        id:"DiaLiScreen",
        num: 6,
    },{
        name:'Tin Học',
        courses:[
            {
                    type:'TinHocScreen',
                    name:'Tin Học 1',
                    hard:4,
                    
                        quiz:[
                        
                            {
                                quizImage:
                              'https://i.ibb.co/bzQVrX4/carbon-32.png',
                              
                                answer:['ram','rom','router','cpu'],
                                CorrectAnswer:'router',
                                solution:`
                                `
                            },
                            {
                                quizImage:
                              'https://i.ibb.co/ng6S9Fw/carbon-33.png',
                              
                                answer:['Bộ nhớ trong,bộ nhớ ngoài',
                            'Cache,Bộ nhớ ngoài','Bộ nhớ ngoài,ROM','Đĩa quang,bộ nhớ trong'],
                                CorrectAnswer:'Bộ nhớ trong,bộ nhớ ngoài',
                                solution:`
                                `
                            },
                        
                        ],
                        },
                        {
                    type:'TinHocScreen',
                    name:'Tin Học 2',
                    hard:4,
                    
                        quiz:[
                        
                            {
                                quizImage:
                              'https://i.ibb.co/bzQVrX4/carbon-32.png',
                              
                                answer:['ram','rom','router','cpu'],
                                CorrectAnswer:'router',
                                solution:`
                                `
                            },
                            {
                                quizImage:
                              'https://i.ibb.co/ng6S9Fw/carbon-33.png',
                              
                                answer:['Bộ nhớ trong,bộ nhớ ngoài',
                            'Cache,Bộ nhớ ngoài','Bộ nhớ ngoài,ROM','Đĩa quang,bộ nhớ trong'],
                                CorrectAnswer:'Bộ nhớ trong,bộ nhớ ngoài',
                                solution:`
                                `
                            },
                        
                        ],
                        }
        ],
        icon:
        'https://img.icons8.com/nolan/344/hardworking--v1.png',
        id:"TinHocScreen",
        num: 7,
    },{
        name:'Tiếng Anh',
        courses:[{
            type:'TiengAnhScreen',
            name:'Thì Hiện Tại Đơn',
            hard:5,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Thì Hiện Tại Tiếp Diễn',
            hard:3,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Thì Hiện Tại Hoàn Thành',
            hard:5,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Thì Tương Lai Đơn',
            hard:2,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Thì Tương Lai Tiếp Diễn',
            hard:1,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Thì Tương Lai Hoàn Thành',
            hard:4,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Tương Lai Gần',
            hard:5,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Thì Quá Khứ Hoàn Thành',
            hard:3,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Thì Quá Khứ Đơn',
            hard:3,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Thì Quá Khứ Tiếp Diễn',
            hard:2,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Phiên Âm ed',
            hard:4,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },
        {
            type:'TiengAnhScreen',
            name:'Phiên Âm s',
            hard:5,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Từ Vựng Thiên Nhiên',
            hard:1,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Từ Vựng Cảm Xúc',
            hard:2,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Toan Dai So',
            hard:4,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },{
            type:'TiengAnhScreen',
            name:'Toan Dai So',
            hard:5,
            quiz:[
                {
                    quizImage:
                  'https://i.ibb.co/QHNPnpp/carbon-7.png',
                    answer:['work','worked','works','have worked'],
                    CorrectAnswer:'worked',
                    solution:'Đằng sau có ago ta sử dụng thì quá khứ đơn.Đáp án worked'
                },
                {
                    quizImage:'https://i.ibb.co/16qhJH4/carbon-34.png',
                    answer:['play','plays','played','playing'],
                    CorrectAnswer:'playing',
                    solution:''
                }
            ]
        },
    ],
        icon:
        'https://img.icons8.com/nolan/344/abc.png',
        id:"TiengAnhScreen",
        num: 8,
    }

]
// courses:[{
//     type:'VanHocScreen',
//     name:'Toán IQ 2',
//     hard:4,
    
//         quiz:[
//         
//             {
//                 quizImage:
//               'https://i.ibb.co/Fm7YvH2/carbon-13.png',
              
//                 answer:['','','',''],
//                 CorrectAnswer:'',
//                 solution:`
//                 `
//             },],
//         }],