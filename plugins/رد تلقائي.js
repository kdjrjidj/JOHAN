let handler = m => m; 
  
 handler.hsjsh = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^دازاي بحبك|هيفين عاوزه اتجوزك|بحبك|بموت فيك|نتجوز|دازاي هنتجوز امتي|دازاي انت ليا|دازاي بموت فيك$/i.test(m.text)) { 
     dhdhdhhs = [ 
       '*و أنا أكثر يعمري🫶🏻💗*   ',  
       '*حبتك حية قول آمين!*',  
             '*كتكت جعل م غيرك يحبني🥹*',  
                   '*يلبيي حتنا*💗',  
                         'خلاص لا اتكسف ',  
                               '*مين م يحبني؟*   ',  
                                     '*لو أنك اياناكوجي* '  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     dhdhdhhs = [ 
       'وعليكم السلام',  
          'وعليكم السلام حبي متور',  
              ' وعليكم السلام كيفك',  
                   'وعليكم السلام ورحمة الله وبركاته' 
     ]; 
   }else if (/^ دازاي عامل ايه|عامله ايه|عاملين ايه|الدنيا عامله ايه|عاملين ايه يشبب$/i.test(m.text)) { 
     dhdhdhhs = [ 
       '*كل شيء بخير الحمد لله* ',  
          ' *مش عارفه*  ',  
              ' *الحمد لله ماشي الحال* ',  
                  '*الحمد الله*',  
                      ' *لو انت كويس انا كويسه*' 
     ]; 
   }else if (/^كل خرا|عرص|خول|متناك|كسمك|علق$/i.test(m.text)) { 
     dhdhdhhs = [ 
       'عيب ',  
          ' اتأدب ',  
              ' الله يسامحك ',  
                  'الله يهديك ',  
                   ' عيب يا طفل' 
     ]; 
 }else if (/^تم تعريب هذا الامر|تم الانتهاء|تمت اضافه|تمت اضافة|تم التعريب|هذا الامر انتهي$/i.test(m.text)) { 
     dhdhdhhs = [ 
       ' عاشت ايدك ✨💜', 
